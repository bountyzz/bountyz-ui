import { ethers, Contract } from "ethers";
import React from "react";

import USER_ABI from "../abis/User.json";

//Contract address of User.sol(bountyz-core) deployed at Polygon Mumbai
const CONTRACT_ADDRESS = "0x417fC4E826BD823080cA6e8e4F1C87F9658a8861";

export enum UserType {
  EMPLOYER = 1,
  EMPLOYEE = 2,
  UNENROLLED = 3,
}

export enum StoreAction {
  LOGIN,
  LOGOUT,
}
export interface IStoreAction {
  type: StoreAction;
  payload?: Partial<IStoreState>;
}
interface IStoreState {
  loggedIn: boolean;
  wallet?: string;
  provider?: ethers.providers.Web3Provider;
  userType?: UserType;
  contract?: Contract;
  logout?: () => void;
}
type IStoreDispatch = (action: IStoreAction) => void;

const StoreContext = React.createContext<
  { state: IStoreState; dispatch?: IStoreDispatch } | undefined
>(undefined);

function storeReducer(state: IStoreState, action: IStoreAction): IStoreState {
  switch (action.type) {
    case StoreAction.LOGIN: {
      return {
        ...state,
        loggedIn: true,
        ...action.payload,
      };
    }
    case StoreAction.LOGOUT: {
      return { loggedIn: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(storeReducer, { loggedIn: false });

  const value = { state, dispatch };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

function useStore() {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

async function loginUser(
  provider: ethers.providers.Web3Provider,
  logout: () => void,
  dispatch: IStoreDispatch
) {
  const signer = provider.getSigner();
  console.log("providersigner: "+signer);
  const address = await signer.getAddress();
  console.log("address: "+String(address));
  const wallet = String(address);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, USER_ABI.abi, signer);
  let result = await contract.getUserType(wallet);
  const userType = parseInt(result._hex, 16);

  dispatch({
    type: StoreAction.LOGIN,
    payload: { wallet, provider, userType, contract, logout },
  });
}

export { StoreProvider, useStore, loginUser };

"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/logo_navbar.tsx



const LogoNavbar = ({ width =160 , height =50 , ...props })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
        ...props,
        src: "/bountyz.jpg",
        alt: "Bountyz Logo",
        width: width,
        height: height
    }));
};
/* harmony default export */ const logo_navbar = (LogoNavbar);

;// CONCATENATED MODULE: external "ethers"
const external_ethers_namespaceObject = require("ethers");
;// CONCATENATED MODULE: ./abis/User.json
const User_namespaceObject = {};
;// CONCATENATED MODULE: ./services/store.tsx




//Contract address of User.sol deployed at Polygon Mumbai
const CONTRACT_ADDRESS = "0xD631f91d1114aD52778c398CEdfDdb381fC632c4";
var UserType;
(function(UserType) {
    UserType[UserType["LEARNER"] = 1] = "LEARNER";
    UserType[UserType["SPONSOR"] = 2] = "SPONSOR";
    UserType[UserType["UNENROLLED"] = 3] = "UNENROLLED";
})(UserType || (UserType = {}));
var StoreAction;
(function(StoreAction) {
    StoreAction[StoreAction["LOGIN"] = 0] = "LOGIN";
    StoreAction[StoreAction["LOGOUT"] = 1] = "LOGOUT";
})(StoreAction || (StoreAction = {}));
const StoreContext = /*#__PURE__*/ external_react_default().createContext(undefined);
function storeReducer(state, action) {
    switch(action.type){
        case StoreAction.LOGIN:
            {
                return {
                    ...state,
                    loggedIn: true,
                    ...action.payload
                };
            }
        case StoreAction.LOGOUT:
            {
                return {
                    loggedIn: false
                };
            }
        default:
            {
                throw new Error(`Unhandled action type: ${action.type}`);
            }
    }
}
function StoreProvider({ children  }) {
    const [state, dispatch] = external_react_default().useReducer(storeReducer, {
        loggedIn: false
    });
    const value = {
        state,
        dispatch
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(StoreContext.Provider, {
        value: value,
        children: children
    }));
}
function useStore() {
    const context = external_react_default().useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
}
async function loginUser(provider, logout, dispatch) {
    const signer = provider.getSigner();
    console.log("providersigner: " + signer);
    const address = await signer.getAddress();
    console.log("address: " + String(address));
    const wallet = String(address);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, USER_ABI.abi, signer);
    let result = await contract.getUserType(wallet);
    const userType = parseInt(result._hex, 16);
    dispatch({
        type: StoreAction.LOGIN,
        payload: {
            wallet,
            provider,
            userType,
            logout
        }
    });
}


;// CONCATENATED MODULE: ./components/navbar.tsx




const Navbar = ()=>{
    const { state: { wallet , loggedIn , logout  } ,  } = useStore();
    const { 0: auth , 1: setAuth  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setAuth(true);
    }, []);
    const handleLogoutClick = async ()=>{
        logout();
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between text-blue-dark",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx(logo_navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center",
                children: loggedIn && auth && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "mr-4 pt-0.5",
                            children: [
                                "Wallet: ",
                                wallet
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-blue-dark text-md",
                            onClick: handleLogoutClick,
                            children: "Logout"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/page.tsx



const Page = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-1 flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-[8vh] flex flex-1 flex-col",
                children: children
            })
        ]
    })
;
/* harmony default export */ const page = (Page);

;// CONCATENATED MODULE: ./components/footer.tsx


const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-1 flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mr-1",
                        children: "Powered by"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "mr-3 flex",
                                href: "https://polygon.technology/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/polygon.svg",
                                    height: 60,
                                    width: 135
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "mr-5 flex",
                                href: "https://web3auth.io/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/web3auth.svg",
                                    height: 20,
                                    width: 120
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "mr-5 flex",
                                href: "https://www.superfluid.finance/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/superfluid.svg",
                                    height: 10,
                                    width: 110
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-1 flex-col items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "cursor-pointer ml-8",
                        children: "For HackFS ETHGlobal hackathon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "cursor-pointer ml-8",
                        children: "Bountyz Copyright @ 2022"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
;// CONCATENATED MODULE: ./pages/_app.tsx







const Auth = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "../components/auth"
        ]
    },
    ssr: false
});
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StoreProvider, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Bountyz"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(page, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Auth, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,675], () => (__webpack_exec__(320)));
module.exports = __webpack_exports__;

})();
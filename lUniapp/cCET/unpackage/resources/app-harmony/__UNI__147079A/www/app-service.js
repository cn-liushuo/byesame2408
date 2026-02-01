(function(vue) {
  "use strict";
  const _imports_0$5 = "/static/images/DLHFDLDRDLHM.png";
  const _imports_1$3 = "/static/images/username.png";
  const _imports_2$2 = "/static/images/password.png";
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "login",
    setup(__props) {
      const username = vue.ref("");
      const password = vue.ref("");
      const isChecked = vue.ref(false);
      const usernameInput = (e) => {
        username.value = e.detail.value;
      };
      const passwordInput = (e) => {
        password.value = e.detail.value;
      };
      const handleChecked = () => {
        isChecked.value = !isChecked.value;
      };
      const toServiceAgreement = () => {
        uni.navigateTo({
          url: "/pages/serviceAgreement/serviceAgreement"
        });
      };
      const toPrivacyProtection = () => {
        uni.navigateTo({
          url: "/pages/privacyProtection/privacyProtection"
        });
      };
      const handleLogin = () => {
        if (username.value !== "" && password.value !== "" && isChecked.value) {
          uni.switchTab({
            url: "/pages/homePage/homePage"
          });
        }
      };
      return (_ctx = null, _cache = null) => {
        return vue.openBlock(), vue.createElementBlock("scroll-view", new UTSJSONObject({
          "scroll-y": "true",
          class: "loginPage"
        }), [
          vue.createElementVNode("view", new UTSJSONObject({ class: "loginPage" }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "img" }), [
              vue.createElementVNode("image", new UTSJSONObject({
                style: new UTSJSONObject({ "width": "502rpx" }),
                src: _imports_0$5,
                mode: "widthFix"
              }))
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "username" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "username-icon" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "40rpx" }),
                  src: _imports_1$3,
                  mode: "widthFix"
                }))
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "username-input" }), [
                vue.createElementVNode("input", new UTSJSONObject({
                  class: "uni-input",
                  type: "text",
                  placeholder: "用户名",
                  onInput: _cache[0] || (_cache[0] = ($event = null) => {
                    return usernameInput($event);
                  })
                }), null, 32)
              ])
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "password" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "password-icon" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "40rpx" }),
                  src: _imports_2$2,
                  mode: "widthFix"
                }))
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "password-input" }), [
                vue.createElementVNode("input", new UTSJSONObject({
                  class: "uni-input",
                  type: "text",
                  placeholder: "密码",
                  password: true,
                  onInput: _cache[1] || (_cache[1] = ($event = null) => {
                    return passwordInput($event);
                  })
                }), null, 32)
              ])
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "agreement" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "radio" }), [
                vue.createElementVNode("radio", new UTSJSONObject({
                  checked: vue.unref(isChecked),
                  onClick: handleChecked
                }), null, 8, ["checked"])
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "text" }), [
                vue.createTextVNode(" 我已阅读并同意 "),
                vue.createElementVNode("text", new UTSJSONObject({
                  class: "agreement-text",
                  onClick: toServiceAgreement
                }), "服务协议"),
                vue.createTextVNode(" & "),
                vue.createElementVNode("text", new UTSJSONObject({
                  class: "agreement-text",
                  onClick: toPrivacyProtection
                }), "隐私保护")
              ])
            ]),
            vue.createElementVNode("view", new UTSJSONObject({
              class: "custom-button",
              style: vue.normalizeStyle(vue.unref(username) !== "" && vue.unref(password) !== "" && vue.unref(isChecked) ? "background-color: #007ffc;" : "background-color: rgb(202, 202, 202);")
            }), [
              vue.createElementVNode("text", new UTSJSONObject({
                class: "custom-button-text",
                onClick: handleLogin
              }), "登录")
            ], 4)
          ])
        ]);
      };
    }
  });
  const _style_0$6 = { "loginPage": { "": { "backgroundColor": "#ffffff", "height": "100%", "width": "100%" } }, "img": { "": { "width": "100%", "alignItems": "center" } }, "username": { "": { "width": "612rpx", "height": "92rpx", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#eeeeee", "borderRightColor": "#eeeeee", "borderBottomColor": "#eeeeee", "borderLeftColor": "#eeeeee", "marginTop": "130rpx", "marginRight": "auto", "marginBottom": 0, "marginLeft": "auto", "display": "flex", "flexDirection": "row", "boxShadow": "0 0 5rpx 0 #00CCFF" } }, "password": { "": { "width": "612rpx", "height": "92rpx", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#eeeeee", "borderRightColor": "#eeeeee", "borderBottomColor": "#eeeeee", "borderLeftColor": "#eeeeee", "marginTop": "30rpx", "marginRight": "auto", "marginBottom": 0, "marginLeft": "auto", "display": "flex", "flexDirection": "row", "boxShadow": "0 0 5rpx 0 #00CCFF" } }, "username-icon": { "": { "marginLeft": "40rpx", "marginTop": "24rpx", "marginRight": "40rpx" } }, "password-icon": { "": { "marginLeft": "40rpx", "marginTop": "24rpx", "marginRight": "40rpx" } }, "uni-input": { "": { "height": "92rpx", "fontSize": "38rpx", "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "flex": 1, "backgroundColor": "#ffffff" } }, "agreement": { "": { "marginTop": "60rpx", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "text": { ".agreement>": { "fontSize": "24rpx", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "agreement-text": { ".agreement>.text>": { "fontSize": "30rpx", "color": "#0000FF" } }, "custom-button": { "": { "width": "612rpx", "height": "92rpx", "marginTop": "80rpx", "marginRight": "auto", "marginBottom": 0, "marginLeft": "auto", "borderTopLeftRadius": "50rpx", "borderTopRightRadius": "50rpx", "borderBottomRightRadius": "50rpx", "borderBottomLeftRadius": "50rpx", "backgroundColor": "#cacaca", "color": "#ffffff", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "custom-button-text": { "": { "color": "#ffffff", "letterSpacing": "40rpx" } } };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["styles", [_style_0$6]]]);
  const _imports_0$4 = "/static/images/1.jpg";
  const _imports_1$2 = "/static/images/2.jpg";
  const _imports_2$1 = "/static/images/3.jpg";
  const _imports_3$1 = "/static/images/score.png";
  const _imports_4 = "/static/images/interviewNav.png";
  const _imports_5 = "/static/images/speaker.png";
  const _imports_6 = "/static/images/More.png";
  const _imports_0$3 = "/static/images/readDaily.jpg";
  const _imports_8 = "/static/images/book.png";
  const _imports_0$2 = "/static/images/journal.jpg";
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "homePage",
    setup(__props) {
      const toReadDailyPage = () => {
        uni.navigateTo({
          url: "/pages/readDailyPage/readDailyPage"
        });
      };
      const toBonVoyagePage = () => {
        uni.navigateTo({
          url: "/pages/bonVoyagePage/bonVoyagePage"
        });
      };
      return (_ctx = null, _cache = null) => {
        return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({ class: "homePage" }), [
          vue.createElementVNode("view", new UTSJSONObject({ class: "status_bar" })),
          vue.createElementVNode("view", new UTSJSONObject({ class: "homeContent" }), [
            vue.createElementVNode("swiper", new UTSJSONObject({
              circular: true,
              "indicator-dots": true,
              autoplay: true,
              interval: 3e3,
              duration: 1e3,
              "indicator-color": "rgb(255, 255, 255)",
              "indicator-active-color": "#00ccff"
            }), [
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "100%" }),
                  src: _imports_0$4,
                  mode: ""
                }))
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "100%" }),
                  src: _imports_1$2,
                  mode: ""
                }))
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "100%" }),
                  src: _imports_2$1,
                  mode: ""
                }))
              ])
            ], 8, ["indicator-color"]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "nav" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "nav-item" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "96rpx" }),
                  src: _imports_3$1,
                  mode: "widthFix"
                })),
                vue.createElementVNode("text", new UTSJSONObject({ class: "nav-item-text" }), "成绩")
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "nav-item" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "96rpx" }),
                  src: _imports_4,
                  mode: "widthFix"
                })),
                vue.createElementVNode("text", new UTSJSONObject({ class: "nav-item-text" }), "面试")
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "nav-item" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "96rpx" }),
                  src: _imports_3$1,
                  mode: "widthFix"
                })),
                vue.createElementVNode("text", new UTSJSONObject({ class: "nav-item-text" }), "帮助")
              ])
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily" }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: "readDaily-nav",
                onClick: toReadDailyPage
              }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily-nav-left" }), [
                  vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily-nav-left-img" }), [
                    vue.createElementVNode("image", new UTSJSONObject({
                      style: new UTSJSONObject({ "width": "36rpx" }),
                      src: _imports_5,
                      mode: "widthFix"
                    }))
                  ]),
                  vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily-nav-left-text" }), [
                    vue.createElementVNode("text", new UTSJSONObject({ class: "readDaily-nav-left-text-text" }), "每日一读")
                  ])
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily-nav-right" }), [
                  vue.createElementVNode("image", new UTSJSONObject({
                    style: new UTSJSONObject({ "width": "84rpx" }),
                    src: _imports_6,
                    mode: "widthFix"
                  }))
                ])
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily-content" }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily-content-left" }), [
                  vue.createElementVNode("image", new UTSJSONObject({
                    style: new UTSJSONObject({ "width": "188rpx" }),
                    src: _imports_0$3,
                    mode: "widthFix"
                  }))
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "readDaily-content-right" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "readDaily-content-right-title" }), "生命的美丽在于进取"),
                  vue.createElementVNode("text", new UTSJSONObject({ class: "readDaily-content-right-detail" }), "就像大树的美丽，是展现在它负势向上高耸入云的蓬勃生机中；像雄鹰的美丽，是展现在它搏风击雨如苍天之魂的翱翔中")
                ])
              ])
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage" }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: "bonVoyage-nav",
                onClick: toBonVoyagePage
              }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage-nav-left" }), [
                  vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage-nav-left-img" }), [
                    vue.createElementVNode("image", new UTSJSONObject({
                      style: new UTSJSONObject({ "width": "36rpx" }),
                      src: _imports_8,
                      mode: "widthFix"
                    }))
                  ]),
                  vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage-nav-left-text" }), [
                    vue.createElementVNode("text", new UTSJSONObject({ class: "bonVoyage-nav-left-text-text" }), "BON VOYAGE")
                  ])
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage-nav-right" }), [
                  vue.createElementVNode("image", new UTSJSONObject({
                    style: new UTSJSONObject({ "width": "84rpx" }),
                    src: _imports_6,
                    mode: "widthFix"
                  }))
                ])
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage-content" }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage-content-left" }), [
                  vue.createElementVNode("image", new UTSJSONObject({
                    style: new UTSJSONObject({ "width": "188rpx" }),
                    src: _imports_0$2,
                    mode: "widthFix"
                  }))
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "bonVoyage-content-right" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "bonVoyage-content-right-title" }), "BON VOYAGE 2020年8月 刊"),
                  vue.createElementVNode("text", new UTSJSONObject({ class: "bonVoyage-content-right-detail" }), "就像大树的美丽，是展现在它负势向上高耸入云的蓬勃生机中；像雄鹰的美丽，是展现在它搏风击雨如苍天之魂的翱翔中")
                ])
              ])
            ])
          ])
        ]);
      };
    }
  });
  const _style_0$5 = { "status_bar": { "": { "width": "100%", "height": CSS_VAR_STATUS_BAR_HEIGHT, "backgroundColor": "#00ccff" } }, "nav": { "": { "width": "100%", "marginTop": "34rpx", "display": "flex", "flexDirection": "row", "justifyContent": "space-around" } }, "nav-item": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "nav-item-text": { "": { "marginTop": "28rpx", "fontSize": "30rpx", "color": "#636363" } }, "readDaily": { "": { "width": "100%", "marginTop": "38rpx", "paddingLeft": "41rpx", "paddingRight": "41rpx" } }, "readDaily-nav": { "": { "display": "flex", "width": "100%", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "readDaily-nav-left": { "": { "width": "155rpx", "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "readDaily-nav-left-img": { "": { "width": "36rpx" } }, "readDaily-nav-left-text": { "": { "fontSize": "20rpx", "color": "#333333" } }, "readDaily-nav-left-text-text": { "": { "fontSize": "24rpx", "color": "#333333" } }, "readDaily-nav-right": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "readDaily-content": { "": { "marginTop": "34rpx", "width": "100%", "display": "flex", "flexDirection": "row", "justifyContent": "flex-start", "backgroundColor": "#E1E2E9" } }, "readDaily-content-left": { "": { "width": "30%" } }, "readDaily-content-right": { "": { "width": "70%", "paddingTop": "42rpx", "paddingLeft": "44rpx", "paddingRight": "36rpx" } }, "readDaily-content-right-title": { "": { "fontSize": "22rpx", "color": "#3b3b3b" } }, "readDaily-content-right-detail": { "": { "fontSize": "20rpx", "color": "#6a6a6a" } }, "bonVoyage": { "": { "width": "100%", "marginTop": "38rpx", "paddingLeft": "41rpx", "paddingRight": "41rpx" } }, "bonVoyage-nav": { "": { "display": "flex", "width": "100%", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "bonVoyage-nav-left": { "": { "width": "205rpx", "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "bonVoyage-nav-left-img": { "": { "width": "36rpx" } }, "bonVoyage-nav-left-text": { "": { "fontSize": "20rpx", "color": "#333333" } }, "bonVoyage-nav-left-text-text": { "": { "fontSize": "24rpx", "color": "#333333" } }, "bonVoyage-nav-right": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "bonVoyage-content": { "": { "marginTop": "34rpx", "width": "100%", "display": "flex", "flexDirection": "row", "justifyContent": "flex-start", "backgroundColor": "#E1E2E9" } }, "bonVoyage-content-left": { "": { "width": "30%" } }, "bonVoyage-content-right": { "": { "width": "70%", "paddingTop": "42rpx", "paddingLeft": "44rpx", "paddingRight": "36rpx" } }, "bonVoyage-content-right-title": { "": { "fontSize": "22rpx", "color": "#3b3b3b" } }, "bonVoyage-content-right-detail": { "": { "fontSize": "20rpx", "color": "#6a6a6a" } } };
  const PagesHomePageHomePage = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["styles", [_style_0$5]]]);
  const _imports_0$1 = "/static/images/examPageTop.png";
  const _imports_1$1 = "/static/images/＞.png";
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "evaluationPage",
    setup(__props) {
      const toListeningPage = () => {
        uni.navigateTo({
          url: "/pages/listeningPage/listeningPage"
        });
      };
      const toChoicePage = () => {
        uni.__f__("log", "at pages/evaluationPage/evaluationPage.uvue:52", "跳转到选择题页面");
      };
      const toAnswerPage = () => {
        uni.__f__("log", "at pages/evaluationPage/evaluationPage.uvue:56", "跳转到简答题页面");
      };
      return (_ctx = null, _cache = null) => {
        return vue.openBlock(), vue.createElementBlock("scroll-view", new UTSJSONObject({ class: "evaluationPage" }), [
          vue.createElementVNode("view", new UTSJSONObject({ class: "card" }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "card-left" }), [
              vue.createElementVNode("text", new UTSJSONObject({ class: "card-left-name" }), "张学友")
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "card-center" })),
            vue.createElementVNode("view", new UTSJSONObject({ class: "card-right" }), [
              vue.createElementVNode("image", new UTSJSONObject({
                style: new UTSJSONObject({ "width": "162rpx" }),
                src: _imports_0$1,
                mode: "widthFix"
              }))
            ])
          ]),
          vue.createElementVNode("view", new UTSJSONObject({
            class: "nav",
            onClick: _cache[0] || (_cache[0] = ($event = null) => {
              return toListeningPage();
            })
          }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "nav-left" }), [
              vue.createElementVNode("text", new UTSJSONObject({ class: "nav-left-title" }), "听力题")
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "nav-right" }), [
              vue.createElementVNode("image", new UTSJSONObject({
                style: new UTSJSONObject({ "width": "46rpx" }),
                src: _imports_1$1,
                mode: "widthFix"
              }))
            ])
          ]),
          vue.createElementVNode("view", new UTSJSONObject({
            class: "nav",
            onClick: _cache[1] || (_cache[1] = ($event = null) => {
              return toChoicePage();
            })
          }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "nav-left" }), [
              vue.createElementVNode("text", new UTSJSONObject({ class: "nav-left-title" }), "选择题")
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "nav-right" }), [
              vue.createElementVNode("image", new UTSJSONObject({
                style: new UTSJSONObject({ "width": "46rpx" }),
                src: _imports_1$1,
                mode: "widthFix"
              }))
            ])
          ]),
          vue.createElementVNode("view", new UTSJSONObject({
            class: "nav",
            onClick: _cache[2] || (_cache[2] = ($event = null) => {
              return toAnswerPage();
            })
          }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "nav-left" }), [
              vue.createElementVNode("text", new UTSJSONObject({ class: "nav-left-title" }), "简答题")
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "nav-right" }), [
              vue.createElementVNode("image", new UTSJSONObject({
                style: new UTSJSONObject({ "width": "46rpx" }),
                src: _imports_1$1,
                mode: "widthFix"
              }))
            ])
          ])
        ]);
      };
    }
  });
  const _style_0$4 = { "evaluationPage": { "": { "width": "100%", "flex": 1 } }, "card": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "alignItems": "center", "width": "90%", "height": "356rpx", "backgroundImage": "none", "backgroundColor": "#FFFFFF", "marginTop": "40rpx", "marginRight": "auto", "marginBottom": "40rpx", "marginLeft": "auto", "boxShadow": "1rpx 1rpx 1px linear-gradient(rgba(0, 0, 0, 0.51), white)" } }, "card-left-name": { ".card-left ": { "fontSize": "44rpx", "color": "#454545", "fontWeight": "700", "letterSpacing": 4 } }, "card-center": { "": { "width": "2rpx", "height": "66rpx", "borderTopWidth": "1rpx", "borderRightWidth": "1rpx", "borderBottomWidth": "1rpx", "borderLeftWidth": "1rpx", "borderTopStyle": "dashed", "borderRightStyle": "dashed", "borderBottomStyle": "dashed", "borderLeftStyle": "dashed", "borderTopColor": "#888888", "borderRightColor": "#888888", "borderBottomColor": "#888888", "borderLeftColor": "#888888", "alignSelf": "flex-end", "marginBottom": "40rpx" } }, "nav": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "paddingTop": 0, "paddingRight": "40rpx", "paddingBottom": 0, "paddingLeft": "40rpx", "width": "90%", "height": "112rpx", "backgroundColor": "#FFFFFF", "marginTop": 0, "marginRight": "auto", "marginBottom": "30rpx", "marginLeft": "auto", "borderTopLeftRadius": "56rpx", "borderTopRightRadius": "56rpx", "borderBottomRightRadius": "56rpx", "borderBottomLeftRadius": "56rpx", "boxShadow": "1rpx 1rpx 1px linear-gradient(rgba(0, 0, 0, 0.51), white)" } }, "nav-left-title": { ".nav-left ": { "fontSize": "34rpx", "fontWeight": "700", "color": "#333333" } } };
  const PagesEvaluationPageEvaluationPage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["styles", [_style_0$4]]]);
  const _sfc_main$8 = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", { "scroll-y": "" }, [
      vue.createElementVNode("text", null, "服务协议")
    ]);
  }
  const PagesServiceAgreementServiceAgreement = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4]]);
  const _sfc_main$7 = {};
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", { "scroll-y": "" }, [
      vue.createElementVNode("text", null, "隐私政策")
    ]);
  }
  const PagesPrivacyProtectionPrivacyProtection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3]]);
  const _sfc_main$6 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", { style: { "flex": "1" } }, [
      vue.createElementVNode("text", null, "面试")
    ]);
  }
  const PagesInterviewPageInterviewPage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2]]);
  const _sfc_main$5 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", { style: { "flex": "1" } }, [
      vue.createElementVNode("text", null, "培训")
    ]);
  }
  const PagesTrainingPageTrainingPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
  const _sfc_main$4 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", { style: { "flex": "1" } }, [
      vue.createElementVNode("text", null, "我的")
    ]);
  }
  const PagesMyPageMyPage = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "readDailyPage",
    setup(__props) {
      const tableData = vue.ref(10);
      const lower = () => {
        tableData.value = tableData.value + 5;
      };
      return (_ctx = null, _cache = null) => {
        return vue.openBlock(), vue.createElementBlock("scroll-view", new UTSJSONObject({
          class: "readDailyPage",
          onScrolltolower: lower
        }), [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tableData), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({ class: "card" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "card-left" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "188rpx" }),
                  src: _imports_0$3,
                  mode: "widthFix"
                }))
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "card-right" }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "card-right-title" }), "生命的美丽在于进取"),
                vue.createElementVNode("text", new UTSJSONObject({ class: "card-right-content" }), "就像大树的美丽，是展现在它负势向上高耸入云的蓬勃生机中；像雄鹰的美丽，是展现在它搏风击雨如苍天之魂的翱翔中")
              ])
            ]);
          }), 256))
        ], 32);
      };
    }
  });
  const _style_0$3 = { "readDailyPage": { "": { "flex": 1, "width": "100%", "marginBottom": "40rpx" } }, "card": { "": { "display": "flex", "flexDirection": "row", "backgroundColor": "#E1E2E9", "width": "90%", "marginTop": "40rpx", "marginRight": "auto", "marginBottom": 0, "marginLeft": "auto" } }, "card-left": { "": { "width": "30%" } }, "card-right": { "": { "width": "70%", "paddingLeft": "44rpx", "paddingTop": "36rpx", "paddingRight": "44rpx" } }, "card-right-title": { "": { "fontSize": "22rpx", "color": "#3b3b3b" } }, "card-right-content": { "": { "fontSize": "20rpx", "color": "#6a6a6a" } } };
  const PagesReadDailyPageReadDailyPage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["styles", [_style_0$3]]]);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "bonVoyagePage",
    setup(__props) {
      const tableData = vue.ref(10);
      const lower = () => {
        tableData.value = tableData.value + 5;
      };
      return (_ctx = null, _cache = null) => {
        return vue.openBlock(), vue.createElementBlock("scroll-view", new UTSJSONObject({
          class: "bonVoyage",
          onScrolltolower: lower
        }), [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(tableData), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({ class: "card" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "card-left" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "188rpx" }),
                  src: _imports_0$2,
                  mode: "widthFix"
                }))
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "card-right" }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "card-right-title" }), "BON VOYAG | 2020年6月刊"),
                vue.createElementVNode("text", new UTSJSONObject({ class: "card-right-content" }), "就像大树的美丽，是展现在它负势向上高耸入云的蓬勃生机中；像雄鹰的美丽，是展现在它搏风击雨如苍天之魂的翱翔中")
              ])
            ]);
          }), 256))
        ], 32);
      };
    }
  });
  const _style_0$2 = { "bonVoyage": { "": { "flex": 1, "width": "100%", "marginBottom": "40rpx" } }, "card": { "": { "display": "flex", "flexDirection": "row", "backgroundColor": "#E1E2E9", "width": "90%", "marginTop": "40rpx", "marginRight": "auto", "marginBottom": 0, "marginLeft": "auto" } }, "card-left": { "": { "width": "30%" } }, "card-right": { "": { "width": "70%", "paddingLeft": "44rpx", "paddingTop": "36rpx", "paddingRight": "44rpx" } }, "card-right-title": { "": { "fontSize": "22rpx", "color": "#3b3b3b" } }, "card-right-content": { "": { "fontSize": "20rpx", "color": "#6a6a6a" } } };
  const PagesBonVoyagePageBonVoyagePage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["styles", [_style_0$2]]]);
  const _imports_0 = "/static/images/alarmClock.png";
  const _imports_1 = "/static/images/listeningSpeaker.png";
  const _imports_2 = "/static/images/semicircle.png";
  const _imports_3 = "/static/images/circle.png";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "listeningPage",
    setup(__props) {
      const isPrompt = vue.ref(false);
      const time = vue.ref("00:20:00");
      const totalTime = vue.ref(20 * 60);
      const playTheAudio = () => {
        uni.__f__("log", "at pages/listeningPage/listeningPage.uvue:126", "播放听力");
      };
      const toAnswerSheetPage = () => {
        uni.__f__("log", "at pages/listeningPage/listeningPage.uvue:130", "跳转到答题卡页面");
      };
      const NextQuestion = () => {
        uni.__f__("log", "at pages/listeningPage/listeningPage.uvue:134", "下一题");
      };
      const toPreviousPage = () => {
        uni.navigateBack();
      };
      const begin = () => {
        uni.__f__("log", "at pages/listeningPage/listeningPage.uvue:142", "开始");
        isPrompt.value = false;
        setTimeout(updateCountdown, 1e3);
      };
      const formatTime = (time2 = null) => {
        return time2 < 10 ? `0${time2}` : time2;
      };
      const updateCountdown = () => {
        const hours = Math.floor(totalTime.value / 3600);
        const minutes = Math.floor(totalTime.value % 3600 / 60);
        const seconds = totalTime.value % 60;
        time.value = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        if (totalTime.value > 0) {
          totalTime.value--;
          setTimeout(updateCountdown, 1e3);
        } else {
          uni.__f__("log", "at pages/listeningPage/listeningPage.uvue:167", "倒计时结束");
        }
      };
      vue.onMounted(() => {
        isPrompt.value = true;
      });
      return (_ctx = null, _cache = null) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("scroll-view", new UTSJSONObject({ class: "listeningPage" }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "card-staff" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "card-staff-left" }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "card-staff-left-text" }), "张学友")
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "card-staff-right" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "96rpx" }),
                  src: _imports_0,
                  mode: "widthFix"
                })),
                vue.createElementVNode("text", new UTSJSONObject({ class: "card-staff-right-text" }), vue.toDisplayString(vue.unref(time)), 1)
              ])
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "card-Question" }), [
              vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-one" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  onClick: _cache[0] || (_cache[0] = ($event = null) => {
                    return playTheAudio();
                  }),
                  style: new UTSJSONObject({ "width": "120rpx" }),
                  src: _imports_1,
                  mode: "widthFix"
                }))
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-two" }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-two-text" }), "1.")
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three" }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-left" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-left-text" }), "A")
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-right" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-right-text" }), "一路顺风、安然无恙、一路顺风一路顺风一路")
                ])
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three" }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-left" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-left-text" }), "B")
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-right" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-right-text" }), "一路顺风、安然无恙、一路顺风一路顺风一路")
                ])
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three" }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-left" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-left-text" }), "C")
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-right" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-right-text" }), "一路顺风、安然无恙、一路顺风一路顺风一路")
                ])
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three" }), [
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-left" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-left-text" }), "D")
                ]),
                vue.createElementVNode("view", new UTSJSONObject({ class: "wrap-three-right" }), [
                  vue.createElementVNode("text", new UTSJSONObject({ class: "wrap-three-right-text" }), "一路顺风、安然无恙、一路顺风一路顺风一路")
                ])
              ])
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "btn" }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: "btn-left",
                onClick: _cache[1] || (_cache[1] = ($event = null) => {
                  return toAnswerSheetPage();
                })
              }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "btn-left-text" }), "答题卡")
              ]),
              vue.createElementVNode("view", new UTSJSONObject({
                class: "btn-right",
                onClick: _cache[2] || (_cache[2] = ($event = null) => {
                  return NextQuestion();
                })
              }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "btn-right-text" }), "下一题")
              ])
            ])
          ]),
          vue.unref(isPrompt) ? (vue.openBlock(), vue.createElementBlock("view", new UTSJSONObject({
            key: 0,
            class: "prompt"
          }), [
            vue.createElementVNode("view", new UTSJSONObject({ class: "prompt-card-substrate" }), [
              vue.createElementVNode("image", new UTSJSONObject({
                class: "img",
                style: new UTSJSONObject({ "width": "209rpx" }),
                src: _imports_2,
                mode: "widthFix"
              }))
            ]),
            vue.createElementVNode("view", new UTSJSONObject({ class: "prompt-card-middle" }), [
              vue.createElementVNode("view", new UTSJSONObject({
                class: "fork",
                onClick: _cache[3] || (_cache[3] = ($event = null) => {
                  return toPreviousPage();
                })
              }), "X"),
              vue.createElementVNode("view", new UTSJSONObject({ class: "vertical" })),
              vue.createElementVNode("view", new UTSJSONObject({ class: "point" })),
              vue.createElementVNode("view", new UTSJSONObject({ class: "icon" }), [
                vue.createElementVNode("image", new UTSJSONObject({
                  style: new UTSJSONObject({ "width": "80rpx" }),
                  src: _imports_3,
                  mode: "widthFix"
                })),
                vue.createElementVNode("view", new UTSJSONObject({ class: "icon-vertiacl" })),
                vue.createElementVNode("view", new UTSJSONObject({ class: "icon-point" }))
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "dot-1" })),
              vue.createElementVNode("view", new UTSJSONObject({ class: "dot-2" })),
              vue.createElementVNode("view", new UTSJSONObject({ class: "dot-3" })),
              vue.createElementVNode("view", new UTSJSONObject({ class: "title" }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "tit-title" }), "提示")
              ]),
              vue.createElementVNode("view", new UTSJSONObject({ class: "content" }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "con-content" }), "1.此题型共有20题，每题2分，共40分"),
                vue.createElementVNode("text", new UTSJSONObject({ class: "con-content" }), "2.答题时间：20分钟"),
                vue.createElementVNode("text", new UTSJSONObject({ class: "con-content" }), "3.请一次性完成答题")
              ]),
              vue.createElementVNode("view", new UTSJSONObject({
                class: "beginBtn",
                onClick: begin
              }), [
                vue.createElementVNode("text", new UTSJSONObject({ class: "beginBtn-text" }), "开始")
              ])
            ])
          ])) : vue.createCommentVNode("", true)
        ], 64);
      };
    }
  });
  const _style_0$1 = { "listeningPage": { "": { "width": "100%", "flex": 1 } }, "card-staff": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "40rpx", "paddingRight": "40rpx", "paddingBottom": "40rpx", "paddingLeft": "40rpx", "backgroundColor": "#FFFFFF", "width": "90%", "marginTop": "20rpx", "marginRight": "auto", "marginBottom": "40rpx", "marginLeft": "auto", "boxShadow": "1rpx 1rpx 1px linear-gradient(rgba(0, 0, 0, 0.51), white)" } }, "card-staff-left-text": { ".card-staff-left ": { "letterSpacing": 2, "fontSize": "34rpx", "fontWeight": "700", "color": "#333333" } }, "card-staff-right": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "card-staff-right-text": { ".card-staff-right ": { "color": "#7d7d7d", "fontSize": "23.15rpx", "marginTop": "15.28rpx" } }, "card-Question": { "": { "width": "90%", "height": "70%", "marginTop": 0, "marginRight": "auto", "marginBottom": "36rpx", "marginLeft": "auto", "borderTopLeftRadius": "10rpx", "borderTopRightRadius": "10rpx", "borderBottomRightRadius": "10rpx", "borderBottomLeftRadius": "10rpx", "backgroundColor": "#FFFFFF", "boxShadow": "1rpx 1rpx 1px linear-gradient(rgba(0, 0, 0, 0.51), white)" } }, "wrap-one": { ".card-Question>": { "marginTop": "37rpx", "display": "flex", "flexDirection": "row", "justifyContent": "center" } }, "wrap-two": { "": { "paddingLeft": "69rpx" } }, "wrap-two-text": { ".wrap-two ": { "fontSize": "41rpx", "color": "#2e87f7" } }, "wrap-three": { "": { "display": "flex", "flexDirection": "row", "marginTop": "51rpx", "paddingLeft": "42rpx" } }, "wrap-three-left": { ".wrap-three ": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "width": "48rpx", "height": "48rpx", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#808080", "borderRightColor": "#808080", "borderBottomColor": "#808080", "borderLeftColor": "#808080", "borderTopLeftRadius": "48rpx", "borderTopRightRadius": "48rpx", "borderBottomRightRadius": "48rpx", "borderBottomLeftRadius": "48rpx", "marginRight": "38rpx" } }, "wrap-three-right": { ".wrap-three ": { "width": "80%" } }, "btn": { "": { "width": "90%", "marginTop": 0, "marginRight": "auto", "marginBottom": 0, "marginLeft": "auto", "display": "flex", "flexDirection": "row", "justifyContent": "space-between" } }, "btn-left": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "width": "25.56%", "height": "70rpx", "borderTopWidth": "1rpx", "borderRightWidth": "1rpx", "borderBottomWidth": "1rpx", "borderLeftWidth": "1rpx", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#808080", "borderRightColor": "#808080", "borderBottomColor": "#808080", "borderLeftColor": "#808080", "borderTopLeftRadius": "35rpx", "borderTopRightRadius": "35rpx", "borderBottomRightRadius": "35rpx", "borderBottomLeftRadius": "35rpx" } }, "btn-left-text": { ".btn-left ": { "fontSize": "23.15rpx", "color": "#000000" } }, "btn-right": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "width": "60.74%", "height": "70rpx", "borderTopWidth": "1rpx", "borderRightWidth": "1rpx", "borderBottomWidth": "1rpx", "borderLeftWidth": "1rpx", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "rgba(0,0,0,0)", "borderRightColor": "rgba(0,0,0,0)", "borderBottomColor": "rgba(0,0,0,0)", "borderLeftColor": "rgba(0,0,0,0)", "borderTopLeftRadius": "35rpx", "borderTopRightRadius": "35rpx", "borderBottomRightRadius": "35rpx", "borderBottomLeftRadius": "35rpx", "backgroundColor": "#358df8" } }, "btn-right-text": { ".btn-right ": { "fontSize": "23.15rpx", "color": "#FFFFFF" } }, "prompt": { "": { "position": "fixed", "top": 0, "left": 0, "width": "100%", "height": "100%", "backgroundColor": "rgba(125,125,125,0.3)" } }, "prompt-card-substrate": { "": { "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", "width": "90%", "height": "504rpx", "borderTopLeftRadius": "20rpx", "borderTopRightRadius": "20rpx", "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": "20rpx", "zIndex": -2 } }, "img": { ".prompt-card-substrate ": { "position": "absolute", "right": -20, "top": "20%", "zIndex": -1 } }, "prompt-card-middle": { "": { "position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", "width": "90%", "height": "504rpx", "borderTopLeftRadius": "20rpx", "borderTopRightRadius": "20rpx", "borderBottomRightRadius": "20rpx", "borderBottomLeftRadius": "20rpx", "backgroundColor": "rgba(255,255,255,0.95)", "zIndex": -1 } }, "fork": { ".prompt-card-middle ": { "position": "absolute", "top": 22, "right": 30 } }, "vertical": { ".prompt-card-middle ": { "width": "32rpx", "height": "124rpx", "backgroundColor": "rgba(255,255,255,0.95)", "position": "absolute", "right": 20, "top": 90, "borderTopLeftRadius": "32rpx", "borderTopRightRadius": "32rpx", "borderBottomRightRadius": "32rpx", "borderBottomLeftRadius": "32rpx" } }, "point": { ".prompt-card-middle ": { "width": "32rpx", "height": "32rpx", "backgroundColor": "rgba(255,255,255,0.95)", "position": "absolute", "right": 20, "top": 160, "borderTopLeftRadius": "32rpx", "borderTopRightRadius": "32rpx", "borderBottomRightRadius": "32rpx", "borderBottomLeftRadius": "32rpx" } }, "icon": { ".prompt-card-middle ": { "position": "absolute", "top": 30, "left": 40 } }, "icon-vertiacl": { ".prompt-card-middle .icon ": { "width": "7rpx", "height": "26rpx", "borderTopLeftRadius": "7rpx", "borderTopRightRadius": "7rpx", "borderBottomRightRadius": "7rpx", "borderBottomLeftRadius": "7rpx", "backgroundColor": "#ffffff", "position": "absolute", "top": 10, "left": 19 } }, "icon-point": { ".prompt-card-middle .icon ": { "width": "7rpx", "height": "7rpx", "borderTopLeftRadius": "7rpx", "borderTopRightRadius": "7rpx", "borderBottomRightRadius": "7rpx", "borderBottomLeftRadius": "7rpx", "backgroundColor": "#ffffff", "position": "absolute", "top": 26, "left": 19 } }, "dot-1": { ".prompt-card-middle ": { "width": "5rpx", "height": "10rpx", "backgroundColor": "#ffc900", "position": "absolute", "top": 25, "left": 70, "borderTopLeftRadius": "5rpx", "borderTopRightRadius": "5rpx", "borderBottomRightRadius": "5rpx", "borderBottomLeftRadius": "5rpx" } }, "dot-2": { ".prompt-card-middle ": { "width": "5rpx", "height": "10rpx", "backgroundColor": "#ffc900", "position": "absolute", "top": 26, "left": 75, "borderTopLeftRadius": "5rpx", "borderTopRightRadius": "5rpx", "borderBottomRightRadius": "5rpx", "borderBottomLeftRadius": "5rpx", "transform": "rotate(45deg)" } }, "dot-3": { ".prompt-card-middle ": { "width": "5rpx", "height": "10rpx", "backgroundColor": "#ffc900", "position": "absolute", "top": 30, "left": 78, "borderTopLeftRadius": "5rpx", "borderTopRightRadius": "5rpx", "borderBottomRightRadius": "5rpx", "borderBottomLeftRadius": "5rpx", "transform": "rotate(80deg)" } }, "title": { ".prompt-card-middle ": { "position": "absolute", "left": 90, "top": 35 } }, "tit-title": { ".prompt-card-middle .title ": { "fontSize": "45rpx", "color": "#2e87f7", "fontWeight": "700" } }, "content": { ".prompt-card-middle ": { "position": "absolute", "left": 40, "top": 90 } }, "con-content": { ".prompt-card-middle .content ": { "color": "#2e87f7", "paddingTop": "16rpx", "paddingRight": 0, "paddingBottom": "16rpx", "paddingLeft": 0, "fontSize": "30rpx" } }, "beginBtn": { ".prompt-card-middle ": { "width": "264rpx", "height": "80rpx", "backgroundColor": "#2e87f7", "position": "absolute", "left": "30%", "top": 200, "display": "flex", "justifyContent": "center", "alignItems": "center", "borderTopLeftRadius": "10rpx", "borderTopRightRadius": "10rpx", "borderBottomRightRadius": "10rpx", "borderBottomLeftRadius": "10rpx" } }, "beginBtn-text": { ".prompt-card-middle .beginBtn ": { "color": "#ffffff", "letterSpacing": 10, "fontSize": "25rpx", "fontWeight": "400" } } };
  const PagesListeningPageListeningPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/homePage/homePage", PagesHomePageHomePage);
  __definePage("pages/evaluationPage/evaluationPage", PagesEvaluationPageEvaluationPage);
  __definePage("pages/serviceAgreement/serviceAgreement", PagesServiceAgreementServiceAgreement);
  __definePage("pages/privacyProtection/privacyProtection", PagesPrivacyProtectionPrivacyProtection);
  __definePage("pages/interviewPage/interviewPage", PagesInterviewPageInterviewPage);
  __definePage("pages/trainingPage/trainingPage", PagesTrainingPageTrainingPage);
  __definePage("pages/myPage/myPage", PagesMyPageMyPage);
  __definePage("pages/readDailyPage/readDailyPage", PagesReadDailyPageReadDailyPage);
  __definePage("pages/bonVoyagePage/bonVoyagePage", PagesBonVoyagePageBonVoyagePage);
  __definePage("pages/listeningPage/listeningPage", PagesListeningPageListeningPage);
  let firstBackTime = 0;
  const _sfc_main = vue.defineComponent(new UTSJSONObject({
    onLaunch: function() {
      uni.__f__("log", "at App.uvue:7", "App Launch");
    },
    onShow: function() {
      uni.__f__("log", "at App.uvue:10", "App Show");
    },
    onHide: function() {
      uni.__f__("log", "at App.uvue:13", "App Hide");
    },
    onLastPageBackPress: function() {
      uni.__f__("log", "at App.uvue:17", "App LastPageBackPress");
      if (firstBackTime == 0) {
        uni.showToast({
          title: "再按一次退出应用",
          position: "bottom"
        });
        firstBackTime = Date.now();
        setTimeout(() => {
          firstBackTime = 0;
        }, 2e3);
      } else if (Date.now() - firstBackTime < 2e3) {
        firstBackTime = Date.now();
        uni.exit();
      }
    },
    onExit: function() {
      uni.__f__("log", "at App.uvue:34", "App Exit");
    }
  }));
  const _style_0 = { "uni-row": { "": { "flexDirection": "row" } }, "uni-column": { "": { "flexDirection": "column" } } };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
  const __global__ = typeof globalThis === "undefined" ? Function("return this")() : globalThis;
  __global__.__uniX = true;
  function createApp() {
    const app = vue.createSSRApp(App);
    return {
      app
    };
  }
  __global__.__mount__ = () => {
    createApp().app.mount("#app");
  };
})(Vue);

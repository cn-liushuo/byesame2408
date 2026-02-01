@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI147079A
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
open class GenPagesLoginLogin : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenPagesLoginLogin) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenPagesLoginLogin
            val _cache = __ins.renderCache
            val username = ref("")
            val password = ref("")
            val isChecked = ref(false)
            val usernameInput = fun(e: UniInputEvent){
                username.value = e.detail.value
            }
            val passwordInput = fun(e: UniInputEvent){
                password.value = e.detail.value
            }
            val handleChecked = fun(){
                isChecked.value = !isChecked.value
            }
            val toServiceAgreement = fun(){
                uni_navigateTo(NavigateToOptions(url = "/pages/serviceAgreement/serviceAgreement"))
            }
            val toPrivacyProtection = fun(){
                uni_navigateTo(NavigateToOptions(url = "/pages/privacyProtection/privacyProtection"))
            }
            val handleLogin = fun(){
                if (username.value !== "" && password.value !== "" && isChecked.value) {
                    uni_switchTab(SwitchTabOptions(url = "/pages/homePage/homePage"))
                }
            }
            return fun(): Any? {
                val _component_radio = resolveComponent("radio")
                return _cE("scroll-view", _uM("scroll-y" to "true", "class" to "loginPage"), _uA(
                    _cE("view", _uM("class" to "loginPage"), _uA(
                        _cE("view", _uM("class" to "img"), _uA(
                            _cE("image", _uM("style" to _nS(_uM("width" to "502rpx")), "src" to "/static/images/DLHFDLDRDLHM.png", "mode" to "widthFix"), null, 4)
                        )),
                        _cE("view", _uM("class" to "username"), _uA(
                            _cE("view", _uM("class" to "username-icon"), _uA(
                                _cE("image", _uM("style" to _nS(_uM("width" to "40rpx")), "src" to "/static/images/username.png", "mode" to "widthFix"), null, 4)
                            )),
                            _cE("view", _uM("class" to "username-input"), _uA(
                                _cE("input", _uM("class" to "uni-input", "type" to "text", "placeholder" to "用户名", "onInput" to fun(`$event`: UniInputEvent){
                                    usernameInput(`$event`)
                                }
                                ), null, 40, _uA(
                                    "onInput"
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "password"), _uA(
                            _cE("view", _uM("class" to "password-icon"), _uA(
                                _cE("image", _uM("style" to _nS(_uM("width" to "40rpx")), "src" to "/static/images/password.png", "mode" to "widthFix"), null, 4)
                            )),
                            _cE("view", _uM("class" to "password-input"), _uA(
                                _cE("input", _uM("class" to "uni-input", "type" to "text", "placeholder" to "密码", "password" to true, "onInput" to fun(`$event`: UniInputEvent){
                                    passwordInput(`$event`)
                                }
                                ), null, 40, _uA(
                                    "onInput"
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "agreement"), _uA(
                            _cE("view", _uM("class" to "radio"), _uA(
                                _cV(_component_radio, _uM("checked" to unref(isChecked), "onClick" to handleChecked), null, 8, _uA(
                                    "checked"
                                ))
                            )),
                            _cE("view", _uM("class" to "text"), _uA(
                                " 我已阅读并同意 ",
                                _cE("text", _uM("class" to "agreement-text", "onClick" to toServiceAgreement), "服务协议"),
                                " & ",
                                _cE("text", _uM("class" to "agreement-text", "onClick" to toPrivacyProtection), "隐私保护")
                            ))
                        )),
                        _cE("view", _uM("class" to "custom-button", "style" to _nS(if (unref(username) !== "" && unref(password) !== "" && unref(isChecked)) {
                            "background-color: #007ffc;"
                        } else {
                            "background-color: rgb(202, 202, 202);"
                        }
                        )), _uA(
                            _cE("text", _uM("class" to "custom-button-text", "onClick" to handleLogin), "登录")
                        ), 4)
                    ))
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ), _uA(
                GenApp.styles
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("loginPage" to _pS(_uM("backgroundColor" to "#ffffff", "height" to "100%", "width" to "100%")), "img" to _pS(_uM("width" to "100%", "alignItems" to "center")), "username" to _pS(_uM("width" to "612rpx", "height" to "92rpx", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#eeeeee", "borderRightColor" to "#eeeeee", "borderBottomColor" to "#eeeeee", "borderLeftColor" to "#eeeeee", "marginTop" to "130rpx", "marginRight" to "auto", "marginBottom" to 0, "marginLeft" to "auto", "display" to "flex", "flexDirection" to "row", "boxShadow" to "0 0 5rpx 0 #00CCFF")), "password" to _pS(_uM("width" to "612rpx", "height" to "92rpx", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#eeeeee", "borderRightColor" to "#eeeeee", "borderBottomColor" to "#eeeeee", "borderLeftColor" to "#eeeeee", "marginTop" to "30rpx", "marginRight" to "auto", "marginBottom" to 0, "marginLeft" to "auto", "display" to "flex", "flexDirection" to "row", "boxShadow" to "0 0 5rpx 0 #00CCFF")), "username-icon" to _pS(_uM("marginLeft" to "40rpx", "marginTop" to "24rpx", "marginRight" to "40rpx")), "password-icon" to _pS(_uM("marginLeft" to "40rpx", "marginTop" to "24rpx", "marginRight" to "40rpx")), "uni-input" to _pS(_uM("height" to "92rpx", "fontSize" to "38rpx", "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0, "flex" to 1, "backgroundColor" to "#ffffff")), "agreement" to _pS(_uM("marginTop" to "60rpx", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "text" to _uM(".agreement>" to _uM("fontSize" to "24rpx", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "agreement-text" to _uM(".agreement>.text>" to _uM("fontSize" to "30rpx", "color" to "#0000FF")), "custom-button" to _pS(_uM("width" to "612rpx", "height" to "92rpx", "marginTop" to "80rpx", "marginRight" to "auto", "marginBottom" to 0, "marginLeft" to "auto", "borderTopLeftRadius" to "50rpx", "borderTopRightRadius" to "50rpx", "borderBottomRightRadius" to "50rpx", "borderBottomLeftRadius" to "50rpx", "backgroundColor" to "#cacaca", "color" to "#ffffff", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "custom-button-text" to _pS(_uM("color" to "#ffffff", "letterSpacing" to "40rpx")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}

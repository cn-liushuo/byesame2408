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
open class GenPagesHomePageHomePage : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "homePage"), _uA(
            _cE("view", _uM("class" to "status_bar")),
            _cE("view", _uM("class" to "homeContent"), _uA(
                _cE("swiper", _uM("circular" to true, "indicator-dots" to true, "autoplay" to true, "interval" to 3000, "duration" to 1000, "indicator-color" to "rgb(255, 255, 255)", "indicator-active-color" to "#00ccff"), _uA(
                    _cE("swiper-item", null, _uA(
                        _cE("image", _uM("style" to _nS(_uM("width" to "100%")), "src" to "/static/images/1.jpg", "mode" to ""), null, 4)
                    )),
                    _cE("swiper-item", null, _uA(
                        _cE("image", _uM("style" to _nS(_uM("width" to "100%")), "src" to "/static/images/2.jpg", "mode" to ""), null, 4)
                    )),
                    _cE("swiper-item", null, _uA(
                        _cE("image", _uM("style" to _nS(_uM("width" to "100%")), "src" to "/static/images/3.jpg", "mode" to ""), null, 4)
                    ))
                ), 8, _uA(
                    "indicator-color"
                )),
                _cE("view", _uM("class" to "nav"), _uA(
                    _cE("view", _uM("class" to "nav-item"), _uA(
                        _cE("image", _uM("style" to _nS(_uM("width" to "96rpx")), "src" to "/static/images/score.png", "mode" to "widthFix"), null, 4),
                        _cE("text", _uM("class" to "nav-item-text"), "成绩")
                    )),
                    _cE("view", _uM("class" to "nav-item"), _uA(
                        _cE("image", _uM("style" to _nS(_uM("width" to "96rpx")), "src" to "/static/images/interviewNav.png", "mode" to "widthFix"), null, 4),
                        _cE("text", _uM("class" to "nav-item-text"), "面试")
                    )),
                    _cE("view", _uM("class" to "nav-item"), _uA(
                        _cE("image", _uM("style" to _nS(_uM("width" to "96rpx")), "src" to "/static/images/score.png", "mode" to "widthFix"), null, 4),
                        _cE("text", _uM("class" to "nav-item-text"), "帮助")
                    ))
                )),
                _cE("view", _uM("class" to "readDaily"), _uA(
                    _cE("view", _uM("class" to "readDaily-nav"), _uA(
                        _cE("view", _uM("class" to "readDaily-nav-left"), _uA(
                            _cE("view", _uM("class" to "readDaily-nav-left-img"), _uA(
                                _cE("image", _uM("style" to _nS(_uM("width" to "36rpx")), "src" to "/static/images/speaker.png", "mode" to "widthFix"), null, 4)
                            )),
                            _cE("view", _uM("class" to "readDaily-nav-left-text"), " 每日一读 ")
                        )),
                        _cE("view", _uM("class" to "readDaily-nav-right"), _uA(
                            _cE("image", _uM("src" to "/static/images/More.png", "mode" to ""))
                        ))
                    ))
                ))
            ))
        ))
    }
    companion object {
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ), _uA(
                GenApp.styles
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("status_bar" to _pS(_uM("width" to "100%", "height" to CSS_VAR_STATUS_BAR_HEIGHT, "backgroundColor" to "#00ccff")), "nav" to _pS(_uM("width" to "100%", "marginTop" to "34rpx", "display" to "flex", "flexDirection" to "row", "justifyContent" to "space-around")), "nav-item" to _pS(_uM("display" to "flex", "flexDirection" to "column", "justifyContent" to "center", "alignItems" to "center")), "nav-item-text" to _pS(_uM("marginTop" to "28rpx", "fontSize" to "30rpx", "color" to "#636363")), "readDaily" to _pS(_uM("width" to "100%", "marginTop" to "38rpx", "paddingLeft" to "41rpx", "paddingRight" to "41rpx")), "readDaily-nav" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "space-between")), "readDaily-nav-left-img" to _pS(_uM("width" to "36rpx")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}


/**
 * dxy ak: h31gPawGznx5GxO3BRzQBld7eFktCfrw
 */

const constScriptId = "scriptInitBMap"
const constMapvId = "scriptLoadMapv"

/**
 * load Baidu Map API in browser environment
 * @param {string} ak private key
 * @param {string} version API version, default "3.0" 
 * @param {number} timeout request timeout(ms), default 8000
 * @param {boolean} forceRefresh whether to force refreshing, default false
 * @param {string} overridedId override script identifier
 * @returns {Promise<object>}
 */
export const loadBMap = (ak, version = "3.0", timeout = 8000, forceRefresh = false, overridedId = null) =>
    new Promise((resolve, reject) => {
        if (!window) {
            const error = "error: no window object"
            console.log(error)
            reject(error)
            return
        }

        /**
         * already mounted
         */
        if (!forceRefresh && window.BMap) {
            resolve(window.BMap)
            return
        }


        /**
         * time out failure
         */
        let k = window.setTimeout(() => reject("request timeout"), timeout)
        let scriptId = overridedId ? overridedId : constScriptId
        /**
         * success callback
         */
        window[scriptId] = () => {
            window.clearTimeout(k)
            resolve(window.BMap)
        }

        /**
         * create script
         */

        let dom = document.body.querySelector("#" + scriptId)
        if (dom) document.body.removeChild(dom)
        let script = document.createElement("script")
        script.id = scriptId
        script.type = "text/javascript"
        script.src = `http://api.map.baidu.com/api?v=${version}&ak=${ak}&callback=${scriptId}`
        document.body.appendChild(script)

    })

export default loadBMap

export const loadMapV = async (scriptId = constMapvId) => {
    let script = document.createElement("script")
    script.id = scriptId
    script.type = "text/javascript"
    script.src = `http://mapv.baidu.com/build/mapv.min.js`
    document.body.appendChild(script)
}

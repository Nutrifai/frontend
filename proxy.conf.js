const PROXY_CONFIG = [
    {
        "enabled": true,
        "context": ["/api_proxy/"],
        "target": "https://d2z802q6a7lheq.cloudfront.net/api",
        "secure": true,
        "changeOrigin": true,
        "logLevel": "debug",
        "pathRewrite": {
            "^/api_proxy": ""
        }
    }
]

module.exports = PROXY_CONFIG.filter(config => config.enabled)
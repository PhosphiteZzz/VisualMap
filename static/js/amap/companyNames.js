/**
 * 地图配置
 */
const companyNames = {
    LabelsData: [
        {
            name: '二期炼化项目区',
            position: [119.556587, 34.564881],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '二期炼化项目区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,

                }
            }
        },
        {
            name: '化工新材料及精细化工区',
            position: [119.537361, 34.544806],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '化工新材料及精细化工区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '安全环保管理中心',
            position: [119.596389, 34.577064],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '安全环保管理中心',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '危险品停车场',
            position: [119.59315, 34.573328],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '危险品停车场',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '炼化铁路卸装区',
            position: [119.60255, 34.570635],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '炼化铁路卸装区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '炼化罐区',
            position: [119.613532, 34.568203],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '炼化罐区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '荣泰仓储罐区',
            position: [119.61006, 34.565023],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '荣泰仓储罐区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '公共罐区',
            position: [119.626368, 34.563221],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '公共罐区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '中石化罐区',
            position: [119.623474, 34.558489],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '中石化罐区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '中化罐区',
            position: [119.63362, 34.559169],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '中化罐区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '卫星石化罐区',
            position: [119.629028, 34.554221],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '卫星石化罐区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '卫星碳三',
            position: [119.634951, 34.549768],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '卫星碳三',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '斯尔邦石化',
            position: [119.590748, 34.559099],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '斯尔邦石化',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '虹港石化',
            position: [119.606455, 34.555564],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '虹港石化',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '公用工程岛',
            position: [119.600447, 34.547505],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '公用工程岛',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '东港污水处理厂',
            position: [119.618772, 34.550722],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '东港污水处理厂',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '中化瑞兆科、瑞恒',
            position: [119.615796, 34.545055],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '中化瑞兆科、瑞恒',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '卫星碳三',
            position: [119.630402, 34.542132],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '卫星碳三',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '中化塑料',
            position: [119.625938, 34.535557],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '中化塑料',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '虹洋热电',
            position: [119.576157, 34.553125],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '虹洋热电',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '盛虹炼化一体化',
            position: [119.583281, 34.541779],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '盛虹炼化一体化',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '重型化工消防站',
            position: [119.606069, 34.538668],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '重型化工消防站',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '中化圣奥',
            position: [119.606798, 34.533719],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '中化圣奥',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '公共火炬区',
            position: [119.598752, 34.526117],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '公共火炬区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '卫星石化一区',
            position: [119.61624, 34.526223],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '卫星石化一区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '220KV孔桥变',
            position: [119.620095, 34.519505],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '220KV孔桥变',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '卫星石化二区',
            position: [119.609231, 34.513262],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '卫星石化二区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '石化产品交易中心',
            position: [119.561995, 34.53835],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '石化产品交易中心',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '赛科化学',
            position: [119.557317, 34.532954],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '赛科化学',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '海科一期',
            position: [119.55384, 34.529863],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '海科一期',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '密尔克卫',
            position: [119.550665, 34.526011],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '密尔克卫',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: 'LNG储配站',
            position: [119.547797, 34.522305],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: 'LNG储配站',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '海科二期',
            position: [119.559763, 34.525163],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '海科二期',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '泰格油墨',
            position: [119.559376, 34.51985],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '泰格油墨',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '鹏辰',
            position: [119.55148, 34.518763],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '鹏辰',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '万博丰',
            position: [119.552467, 34.515474],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '万博丰',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '德邦',
            position: [119.544313, 34.511089],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '德邦',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '佳化化学',
            position: [119.581779, 34.526718],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '佳化化学',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '兴达泡塑',
            position: [119.578689, 34.522582],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '兴达泡塑',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '第二水厂',
            position: [119.57871, 34.519087],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '第二水厂',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '化工新材料及精细化工区',
            position: [119.582029, 34.51221],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '化工新材料及精细化工区',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
        {
            name: '固危废处理中心',
            position: [119.604607, 34.506016],
            opacity: 1,
            zIndex: 10,
            text: {
                // 要展示的文字内容
                content: '固危废处理中心',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                // offset: [-20, -5],
                // 文字样式
                style: {
                    // 字体大小
                    fontSize: 20,
                    // 字体颜色
                    fillColor: '#000000',
                    strokeWidth: 2,
                }
            }
        },
    ]
}
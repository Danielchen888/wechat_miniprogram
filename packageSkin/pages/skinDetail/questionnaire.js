// 问卷数据JS模块
// 将JSON数据转换为JS模块，解决文件读取权限问题

module.exports = {
  questionnaire: [
    {
      "section": "油性/干性皮肤比较",
      "description": "这部分是测试您皮肤的油脂分泌和湿度。研究表明人们对自己的皮肤是油性的还是干性的想法上往往是错误的。不要让自己的先入之见或者是别人的说法使您在回答自己的皮肤问题上有偏见。",
      "questions": [
        {
          "id": "q1_1",
          "text": "在洗完脸后，不要使用任何的保湿霜、防晒霜、柔肤水、粉或者其他产品。过2个或3个小时后，在明亮的灯光下照镜子，您的额头和脸颊会感觉或出现：",
          "options": [
            { "value": "a", "text": "很粗糙，易脱皮，或肤色苍白", "score": 1 },
            { "value": "b", "text": "皮肤紧绷", "score": 2 },
            { "value": "c", "text": "皮肤很水润，在灯光下没有反射", "score": 3 },
            { "value": "d", "text": "在灯光下会有反射光", "score": 4 }
          ]
        },
        {
          "id": "q1_2",
          "text": "在照片上，你的皮肤看起来油光发亮",
          "options": [
            { "value": "a", "text": "从来不会，或你从未注意", "score": 1 },
            { "value": "b", "text": "偶尔", "score": 2 },
            { "value": "c", "text": "经常", "score": 3 },
            { "value": "d", "text": "一直如此", "score": 4 },
            { "value": "e", "text": "不确定", "score": 2.5 }
          ]
        },
        {
          "id": "q1_3",
          "text": "在使用粉底但不用遮盖粉后2～3小时，你的粉底会表现",
          "options": [
            { "value": "a", "text": "在皱纹处起屑或层片状", "score": 1 },
            { "value": "b", "text": "平滑", "score": 2 },
            { "value": "c", "text": "有光泽", "score": 3 },
            { "value": "d", "text": "形成条痕并有光泽", "score": 4 },
            { "value": "e", "text": "我不用粉底", "score": 2.5 }
          ]
        },
        {
          "id": "q1_4",
          "text": "当您在干燥的环境中，如果您不使用保湿霜或者防晒霜，您面部的皮肤会",
          "options": [
            { "value": "a", "text": "感觉很干或干裂", "score": 1 },
            { "value": "b", "text": "感觉很紧绷", "score": 2 },
            { "value": "c", "text": "感觉很正常", "score": 3 },
            { "value": "d", "text": "看上去很光亮，或我从来没有感觉到我需要保湿霜", "score": 4 },
            { "value": "e", "text": "我不知道", "score": 2.5 }
          ]
        },
        {
          "id": "q1_5",
          "text": "从一个放大镜里观察，你面部有多少粗大的毛孔直径超过大头针?",
          "options": [
            { "value": "a", "text": "没有", "score": 1 },
            { "value": "b", "text": "只在T 区(额头和鼻子)有一些", "score": 2 },
            { "value": "c", "text": "有许多", "score": 3 },
            { "value": "d", "text": "非常多", "score": 4 },
            { "value": "e", "text": "不知道", "score": 2.5 }
          ]
        },
        {
          "id": "q1_6",
          "text": "您会怎样描述您面部的皮肤，如：",
          "options": [
            { "value": "a", "text": "干的", "score": 1 },
            { "value": "b", "text": "正常的", "score": 2 },
            { "value": "c", "text": "混合性的", "score": 3 },
            { "value": "d", "text": "油性的", "score": 4 }
          ]
        },
        {
          "id": "q1_7",
          "text": "当您用肥皂泡沫，泡沫乳，泡沫丰富的洁面乳洁面时，您面部的皮肤会",
          "options": [
            { "value": "a", "text": "感觉干或干裂", "score": 1 },
            { "value": "b", "text": "感觉有轻微的干但是没有裂开", "score": 2 },
            { "value": "c", "text": "感觉正常", "score": 3 },
            { "value": "d", "text": "感觉油性的", "score": 4 },
            { "value": "e", "text": "我不用肥皂或其他的泡沫洁面乳", "score": 2.5 }
          ]
        },
        {
          "id": "q1_8",
          "text": "如果没有保湿霜，您脸部的皮肤会感觉紧绷",
          "options": [
            { "value": "a", "text": "经常", "score": 1 },
            { "value": "b", "text": "有时会", "score": 2 },
            { "value": "c", "text": "很少", "score": 3 },
            { "value": "d", "text": "从来不会", "score": 4 }
          ]
        },
        {
          "id": "q1_9",
          "text": "您有毛孔堵塞(黑头或白头)",
          "options": [
            { "value": "a", "text": "从来没有过", "score": 1 },
            { "value": "b", "text": "很少", "score": 2 },
            { "value": "c", "text": "有时会有", "score": 3 },
            { "value": "d", "text": "总有", "score": 4 }
          ]
        },
        {
          "id": "q1_10",
          "text": "您脸部在T 字区(额头和鼻子)是油性的",
          "options": [
            { "value": "a", "text": "从来没有", "score": 1 },
            { "value": "b", "text": "有时", "score": 2 },
            { "value": "c", "text": "时常会有", "score": 3 },
            { "value": "d", "text": "总是", "score": 4 }
          ]
        },
        {
          "id": "q1_11",
          "text": "使用保湿霜后2～3小时你的颊部会",
          "options": [
            { "value": "a", "text": "非常粗糙，起屑或呈灰白色", "score": 1 },
            { "value": "b", "text": "平滑", "score": 2 },
            { "value": "c", "text": "轻度油光发亮", "score": 3 },
            { "value": "d", "text": "光滑油亮，或我根本就不用保湿霜", "score": 4 }
          ]
        }
      ],
      "scoring": {
        "ranges": [
          { "min": 11, "max": 16, "result": "非常干性皮肤" },
          { "min": 17, "max": 26, "result": "轻度干性皮肤" },
          { "min": 27, "max": 33, "result": "轻度油性皮肤" },
          { "min": 34, "max": 44, "result": "非常油性皮肤" }
        ],
        "finalType": [
          { "min": 11, "max": 26, "type": "D", "description": "干性皮肤" },
          { "min": 27, "max": 44, "type": "O", "description": "油性皮肤" }
        ]
      }
    },
    {
      "section": "敏感性/耐受性皮肤比较",
      "description": "这部分测试了您的皮肤是否会有粉刺痤疮、发红、红斑和发痒等敏感型皮肤的倾向。",
      "questions": [
        {
          "id": "q2_1",
          "text": "您脸上出现红色的斑块：",
          "options": [
            { "value": "a", "text": "从来没有", "score": 1 },
            { "value": "b", "text": "很少", "score": 2 },
            { "value": "c", "text": "每月至少会有一次", "score": 3 },
            { "value": "d", "text": "每周至少会有一次", "score": 4 }
          ]
        },
        {
          "id": "q2_2",
          "text": "护肤产品(包括洁面乳、保湿霜、柔肤水和化妆品)会使您的脸部出现发红、发痒或刺痛：",
          "options": [
            { "value": "a", "text": "从来没有", "score": 1 },
            { "value": "b", "text": "很少", "score": 2 },
            { "value": "c", "text": "经常", "score": 3 },
            { "value": "d", "text": "总会有", "score": 4 },
            { "value": "e", "text": "我不用护肤品在我的脸上", "score": 2.5 }
          ]
        },
        {
          "id": "q2_3",
          "text": "您曾经被诊断过有痤疮或玫瑰痤疮(红斑痤疮)吗?",
          "options": [
            { "value": "a", "text": "没有", "score": 1 },
            { "value": "b", "text": "朋友和熟人告诉我有", "score": 2 },
            { "value": "c", "text": "是的", "score": 3 },
            { "value": "d", "text": "是， 一个严重的病例", "score": 4 },
            { "value": "e", "text": "不确定", "score": 2.5 }
          ]
        }
      ],
      "scoring": {
        "ranges": [
          { "min": 8, "max": 24, "result": "非常耐受性皮肤" },
          { "min": 25, "max": 29, "result": "轻度耐受性皮肤" },
          { "min": 30, "max": 33, "result": "轻度敏感性皮肤" },
          { "min": 34, "max": 72, "result": "非常敏感性皮肤" }
        ],
        "finalType": [
          { "min": 8, "max": 29, "type": "R", "description": "耐受性皮肤" },
          { "min": 30, "max": 77, "type": "S", "description": "敏感性皮肤" }
        ],
        "specialRules": [
          { "condition": "diagnosed_by_dermatologist", "addScore": 5 },
          { "condition": "diagnosed_by_other_doctor", "addScore": 2 }
        ]
      }
    },
    {
      "section": "色素性/非色素性皮肤比较",
      "description": "这部分测试您的皮肤是否有形成黑色素的倾向，皮肤色素导致皮肤色泽度增加，并在皮肤损伤后产生色斑、雀斑和灰暗的区域。黑色素会帮助您不被晒伤。",
      "questions": [
        {
          "id": "q3_1",
          "text": "在你起粉刺痤疮或内生发之后，愈合处会出现棕色或黑色斑点吗?",
          "options": [
            { "value": "a", "text": "从来没有或我没注意", "score": 1 },
            { "value": "b", "text": "有时", "score": 2 },
            { "value": "c", "text": "经常", "score": 3 },
            { "value": "d", "text": "总是有", "score": 4 },
            { "value": "e", "text": "我从没起粉刺痤疮或内生发", "score": 2.5 }
          ]
        },
        {
          "id": "q3_2",
          "text": "在您割伤自己后，那个褐色(不是粉色)的痕迹会保持多长时间?",
          "options": [
            { "value": "a", "text": "我没有褐色的痕迹", "score": 1 },
            { "value": "b", "text": "一周", "score": 2 },
            { "value": "c", "text": "几周", "score": 3 },
            { "value": "d", "text": "几个月", "score": 4 }
          ]
        },
        {
          "id": "q3_3",
          "text": "当您在怀孕、服用避孕药、接受荷尔蒙替代疗法时，您的脸上会出现多少黑斑?",
          "options": [
            { "value": "a", "text": "没有", "score": 1 },
            { "value": "b", "text": "一个", "score": 2 },
            { "value": "c", "text": "一点", "score": 3 },
            { "value": "d", "text": "很多", "score": 4 },
            { "value": "e", "text": "这个问题不适用于我", "score": 2.5 }
          ]
        }
      ],
      "scoring": {
        "ranges": [],
        "finalType": [
          { "min": 10, "max": 30, "type": "N", "description": "非色素性皮肤" },
          { "min": 31, "max": 45, "type": "P", "description": "色素性皮肤" }
        ],
        "specialRules": [
          { "condition": "black_spots_on_exposed_skin", "addScore": 5 }
        ]
      }
    },
    {
      "section": "易产生皱纹的皮肤与紧致性皮肤的比较",
      "description": "这部分测试了您是否会产生皱纹，以及您现在有多少皱纹。我的一些患者承认了他们曾经在回答这部分时作弊，得到的结果是\"T\"——在我发现他们这么做的时候。不要那样做!您只是在防止长皱纹的预防性治疗上欺骗自己。现在改掉您的习惯就会改变您在以后的分数，从 \"W\" 变成 \"T\",所以如果您需要它们就要诚实和正确地接受治疗。",
      "questions": [
        {
          "id": "q4_1",
          "text": "您的面部有皱纹吗?",
          "options": [
            { "value": "a", "text": "没有，甚至在笑、皱眉或提眉毛时都没有皱纹", "score": 1 },
            { "value": "b", "text": "只有当我做表情时，如笑、皱眉或将眉毛上提时", "score": 2 },
            { "value": "c", "text": "是的，在做表情时有，不做表情的时候也有一些", "score": 3 },
            { "value": "d", "text": "皱纹一直都有，即使在我不笑、皱眉或提眉毛时", "score": 4 }
          ]
        },
        {
          "id": "q4_2",
          "text": "您母亲面部的皮肤看上去像多大年龄的?",
          "options": [
            { "value": "a", "text": "比她的年龄年轻五到十岁", "score": 1 },
            { "value": "b", "text": "她的年龄", "score": 2 },
            { "value": "c", "text": "比她的年龄大五岁", "score": 3 },
            { "value": "d", "text": "比她的年龄大五岁多", "score": 4 },
            { "value": "e", "text": "不适合；我是被收养的或我不记得了", "score": 2.5 }
          ]
        },
        {
          "id": "q4_3",
          "text": "您父亲面部的皮肤看上去像多大年龄的?",
          "options": [
            { "value": "a", "text": "比他的年龄年轻五到十岁", "score": 1 },
            { "value": "b", "text": "他的年龄", "score": 2 },
            { "value": "c", "text": "比他的年龄大五岁", "score": 3 },
            { "value": "d", "text": "比他的年龄大五岁多", "score": 4 },
            { "value": "e", "text": "不适合；我是被收养的或我不记得了", "score": 2.5 }
          ]
        }
      ],
      "scoring": {
        "ranges": [],
        "finalType": [
          { "min": 20, "max": 40, "type": "T", "description": "紧致皮肤" },
          { "min": 41, "max": 85, "type": "W", "description": "皱纹皮肤" }
        ],
        "specialRules": [
          { "condition": "age_over_65", "addScore": 5 }
        ]
      }
    }
  ]
};

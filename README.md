

#### 技術

1. Nextjs + typescript + zustand + AntDesign css套件。
2. 使用Zustand 三方资料馆里库避免props drilling
3. 使用 React dnd 实做拖曳

#### 規則：

1. 每位玩家上要配13張牌底部的『產生配牌字串』的按鈕才會亮起生成能編譯的檔案。
2. 除了能透過拖曳的方式來將底部的牌拖至上方玩家誆，也能透過點擊玩家诓產生橘色外誆後點選下方牌池的牌就能快速放入玩家誆內。
3. 左下角有回朔牌型功能，輸入規定格式能快速生成當前配牌狀態。

#### 专案结构

```
├── apis
│   └── currencyApi.ts             // 提供currency api接口,並建立fetch request提供¸提供串接使用
├── app
│   ├── layout                     // 專案內全局的佈局
│   ├── page                       // 專案入口
├── components                  
│   └── common                     // 專案共享組建
│      ├── Loading                 // 載入組建
│      ├── Title                   // 標頭組建
│   └── currency                   // currency相關頁面元件
│      ├── CurrencyItem            // currency list 列表元件
│      ├── SelectCurrenctItem      // current select 列表元件
├── defines
│   ├── currencyApiType.d.ts       // currency api 型別定義檔案
│   └── currencyDefines.ts         // currency相關初始配置及ENUM放置處
│   └── pageDefines.ts             // 頁面名稱配置
├── libs                           // libery 配置資料夾
│   └── react-query-lib            // react-query libery 相關函式使用
│      ├── GetQueryClient.ts       // 建立new QueryClient實體且為singal(無使用)
│      ├── HydrateProvider.ts      // 建立dehydrate Provider提供使用ssr資料元件使用
│      ├── QueryProvider.ts        // 建立初始new QueryClient Provider
├── styles                        
│   ├── global.sass                // 全局樣式配置
└── utils                          // 可複用函數
│   ├── rateExchange.ts            // currency匯率轉換函式   
│   ├── thousandsSeparator.ts      // 千分位切割及精度位數換算函式
└── store                          // context api資料存儲位置
│   ├──currencyContextStore.ts     // currency provider 資料存儲管理
├── layout.tsx                     // Next layout
├── page.tsx                       // default home page (/)

```



![image](https://github.com/Jacky20000326/yoo-tool/assets/80142839/968e5a6e-6d98-4345-9de1-4c5f774211de)

# Veloplaneta HR module
___

### TODO:

1. Оценка приложения, выбор стэка, обсуждение основных вопросов (16.12.2019)
2. Создание базововой документации, проработка плана работы, создание конкретного ТЗ (18.12.2019)
3. Создание подготовительной версии приложения 0.0.0
4. Оценка дизайна, описание связей что с чем связанно, как должны взаимодействовать компоненты.
5. Описать модель данных

.... 


### Stack

- React
- Redux (state container)
- Redux-Thunk
- Reselect + re-reselect (selectors for Redux)
- ConnectedRouter
- GSAP (animation)
- Jest + Enzyme (testing) 
- Docker (deployment)

### Structure

- **src/**   
    Папка с исходым кодом
- **config/**   
    Глобальные конфиги:
    - *webpack.common* - основная конфигурация webpack
    - *webpack.dev* - конфиг для  development'a
    - *webpack.prod* - конфиг для production'a
- **build/**   
    Build приложения  
    - *static/* - assets
    - *index.html*
  

### Versions

##### 0.0.0 - подготовительная
- **создать webpack.config (dev, prod)**
    - dev: dev-server, source-maps
    - prod: minify, optimize assets
    
    Зависимости:
    
    - eslint + prettier
    - sass-lint ? 
    - file-loader
    - sass-loader
    - babel
    
- **Dockerfile**

   Build приложения в определённую папку

##### 0.1.0 - создание + тестирование  модели данных (Redux)
- ApiInterface
- reducers
- actions
- selectors (reselect)
- работа с API, тестирование

##### 0.2.0 - Router

Cоздание router'a

##### 0.3.0 - Разработка компонентов

Верстка компонентов

##### 0.4.0 - Тестирование

Тестирование    

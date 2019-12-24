# Veloplaneta HR module
___

HR module for Bitrix24 Veloplaneta

___ 

### Table of contents
* [Stack](#stack)
* [Structture](#structure)
* [Versions](#versions)
    * [0.0.0](#0.0.0)
    * [0.1.0](#0.1.0)


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
Выбор компонентов сборки, обдумывание deployment'a

- **webpack.config (dev, prod)**
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
   
   
##### 0.1.0 - интеграция

1. Cоздание 3-х webpack конфигов и конфиг loader'ов и plugin'ов:

    - **loaders** 
        - подключение loader'ов: file-loader(*images:* png, jpg, gif; *fonts:* woff,woff2,eot,ttf,otf),
        react-svg-loader(svg), sass-loader(scss, sass); <<< каждый loader делать отдельным обьектом 
    - **plugins**:
        - CleanWebpackPlugin - очистка build директории
        - HtmlWebpackPlugin - генерирование index.html на основе созданного шаблона (src/index.html)
        - UglifyJsPlugin - js minification (destination "build/assets/js")
        - MiniCssExtractPlugin - css minification (destination "build/assets/css")
    - **webpack.dev** - loaders (loaders.js), dev-server
    - **webpack.prod** - loaders (loaders.js) extract to *"build/static/(fonts|images)"*, splitting into chunks, js-obfuscator(not readable js);
    - **webpack.prod.test** - for testing before production   
        - bundle-analyzer  
        
        *Сроки:* 16 часов
    
2. Создание 2 Dockerfile и docker-compose: 

    - **Dockerfile_dev** - запуск в development mode (webpack.dev)
    - **Dockerfile** - build приложения
    - **docker-compose** - проброс папок в контейнеры, запуск контейнеров  
    
    *Сроки:* 4 часа

3. Развёртывание b2b (Валера)  
    Cтруктура: 
     
    - **/app** - front  
    - **/api** - api  
    - **/bitrix** - битрикс  
    - **docker-compose.yml** - запуск полного приложения  
    
    *Сроки:* 8 часов

4. Освоение технологий:

    - ConnectedRouter
    - GSAP  
    
    *Сроки:* 12 часов

##### 0.x.0 - создание + тестирование  модели данных (Redux)
- ApiInterface
- reducers
- actions
- selectors (reselect)
- работа с API, тестирование

##### 0.x.0 - Router

Cоздание router'a

##### 0.x.0 - Разработка компонентов

Верстка компонентов

##### 0.x.0 - Тестирование

Тестирование    

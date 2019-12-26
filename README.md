# ![Veloplaneta HR](https://bitbucket.org/skalar_team/veloplaneta_hr_front/raw/11c0c978098b663486054696d926fc7820f47fc2/preview.jpg)

# Veloplaneta HR module
___

HR module for Bitrix24 Veloplaneta

___ 

### Table of contents
___
* [Stack](#markdown-header-stack)
* [Structure](#markdown-header-structure)
* [Versions](#markdown-header-versions)
    * [0.0.0](#markdown-header-000)
    * [0.1.0](#markdown-header-010)


### Stack
___
- React
- Redux (state container)
- Redux-Thunk
- Reselect + re-reselect (selectors for Redux)
- ConnectedRouter
- GSAP (animation)
- Jest + Enzyme (testing) 
- Docker (deployment)

### Structure
___
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
___
##### 0.0.0
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
   
   
##### 0.1.0

1. Cоздание 2-х webpack:
        
    - **loaders.js** - configuring webpack loaders
    - **plugins.js** - configuring webpack plugins
    - **path.js** - webpack config paths
    - **webpack.dev** 
        - dev server configuration
        - loading fonts, correct import links in scss (resolve-url-loader)
        - loading images, svg
        - scss compiling
    - **webpack.prod** 
        - bundle minification (terser plugin)
        - code splitting (dynamic import)
        - minification css
        - make bundle unreadable (obfuscator)
        - analyze bundle (bundle analyzer)
       
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

### Developer
___

[![Dmitry Byrchenko](https://avatars2.githubusercontent.com/u/15804241?s=144)](https://github.com/byrchenko)

[Dmitry Byrchenko](https://github.com/byrchenko)

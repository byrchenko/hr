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
    * [0.2.0](#markdown-header-020)
    * [0.3.0](#markdown-header-030)


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
    
2. Создание Dockerfile и docker-compose: 

    - **Dockerfile** - build приложения
    - **../docker-compose** - создание контейнеров под продакшен, разработку, devserver и анализа билда  
    
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

##### 0.2.0

1. Настройка Jest, Enzyme **(8h)**
2. Api Service - тестирование всех http-методов **(16h)**
3. Добавление ядра Redux (reducer, actions, middleware, selectors), тестирование **(8h)**
4. ConnectedRouter - создать страницы и связи между ними, разбор дизайна **(8h)**

**Использовать TDD**


##### 0.3.0

1. Модель Redux **(8h)**
2. Permissions в компонентах **(4h)**
3. Верстка **(40h)**
4. Transitions **(8h)**
5. Unit testing **(8h)**



### Developer
___

[![Dmitry Byrchenko](https://avatars2.githubusercontent.com/u/15804241?s=144)](https://github.com/byrchenko)

[Dmitry Byrchenko](https://github.com/byrchenko)

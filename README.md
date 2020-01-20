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

### File Structure
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

### Roles
___

1. ##### Employee  
    - просмотр статуса собственного оценивания;
    - прохождение оценивания. 
2. ##### Supervisor  
    - просмотр статуса оценивания сотрудников отдела;
    - оценивание сотрудников;
    - просмотр структуры 
3. ##### HR  
    - просмотр структуры компании;
    - создание оцениваний;
    - настройка оценивания сотрудников;
    - просмотр статуса оценивания сотрудников компании;
    - итоговая оценка сотрудника;
    - изменение должности сотрудника;
    - просмотр статистики оценивания.
   
### Pages 
___
 
1. ##### Главная страница (страница со списком оцениваний)
    - Navigation;
    - GeneralTitle;
    - Sidebar.
    - AssessmentList;
    - AssessmentQuestions (Supervisor, Employee);
    - AssessmentConclusion (HR).
2. ##### Страница настроек оценивания
    - Navigation;
    - GeneralTitle;
    - Sidebar.
    - AssessmentSettings.
3. ##### Страница управления процессом оценивания   
    - Navigation;
    - GeneralTitle;
    - Sidebar.
    - AssessmentProcess. 
    
### Components
___

1. ##### Navigation
    Отображение навигации по страницам модуля.
    При нажатии на елемент навигации осуществляет переход на соответствующую страницу
    
    - Supervisor permissions:  
        - Доступ только к Главной странице
    - Employee permissions:   
        - Доступ только к Главной странице
    - HR permissions:  
        - Доступ к страницам: Главная страница, Страница настроек, Страница управления процессом оценивания

2. ##### GeneralTitle
    Отображает название модуля и [роль](#кoles) пользователя

3. ##### Sidebar
    1. Отображение данных пользователя
    2. Для руководителя и HR должна быть возможность просмотреть список всех сотрудников компании.
    3. Отображение отделов
    4. Отображение списка сотрудников отдела
    5. HR имеет возможность изменять должность сотрудника отдела.
    6. Отображать модальное окно при изменении должности.

4. ##### Страница "Таблица ожидающих оценивания"   
    1. Вывод в таблицу пользователя (списка пользователей) ожидающего оценки.
    2. Вывод информации о текущем состоянии оценивания сотрудника (оценка руководителя, оценка работника, оценка HR).
    3. Если пользователь не прошел оценивание (руководитель не оценил сотрудника) - отображать кновку с переходом на страницу оценивания (для HR перенаправять на отдельную страницу для проведения встречи).
    4. Если нет пользователей ожидающих оценевания - отображать соответствующую страницу.
    
  

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

1. Страница списка оцениваний - верстка модуля, тесты (coverage 100%), работа с Redux
2. Navigation - верстка модуля, тесты (coverage 100%)
3. Заголовок модуля - верстка модуля, тесты (coverage 100%)
4. Sidebar - верстка модуля, тесты (coverage 100%), работа с Redux


### TODO: 
1. Create preloader for pages, when user is loading
2. Create error page
3. Create forbidden page
4. Create tests for layout render according to fetched user data (error, loading, unknown fetched user data)
5. Create test for page permissions


### Developer
___

[![Dmitry Byrchenko](https://avatars2.githubusercontent.com/u/15804241?s=144)](https://github.com/byrchenko)

[Dmitry Byrchenko](https://github.com/byrchenko)

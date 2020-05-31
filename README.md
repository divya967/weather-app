# Development Environment
    Dev environment includes Node.js and NPM(Node Package Manager). 

# Install the angualr CLi (Please make sure you have node and npm installed)
    npm install -g
    npm install -g @angualr/cli

# PrimeNG Angular-CLI

    This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6. 

## Development server
    Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# Technologies & Libraries Used

1) Angular 6, Typescript, HTML5, SASS

2) PrimeNg, AngularCdk

# Requirements Implemented

1) Created two web pages (Countries page and weather page)
2) Countries component includes: Grid with searching, filtering and sorting along with Pagination.
3) It provided duals mode feature to switch between default mode and country only mode
4) User can click on country to navigate to next page of weather details.
5) Weather page includes tabs (temperature, precipitaion, wind) which further provides the datails of:
        a)  Temp ,Humidity, description about weather, speed of wind. Below is the url:
                    api.openweathermap.org/data/2.5/weather?q=Algiers&units=metric&APPID=794ee95e63c5a32aaf88cd813fa2e425

        b) displaying images based on temparature and weather : images are fetced from below url based on icon field which we got in country weather details url.
               http://openweathermap.org/img/wn/04d.png   

6) Also provided the link to switch between metric and imperial modes               
        metric:   api.openweathermap.org/data/2.5/weather?q=Algiers&units=metric&APPID=794ee95e63c5a32aaf88cd813fa2e425
        imperial: api.openweathermap.org/data/2.5/weather?q=Algiers&units=imperial&APPID=794ee95e63c5a32aaf88cd813fa2e425   

 # Angualr Features used
  1) Routing
  2) pagination
  3) data binding
  4) Components data communication
  5) Dependecny injection
  6) observables (Behavior subject)
  7) oops concepts
  
# Also attaching screenshots of UI created (Including all components).   
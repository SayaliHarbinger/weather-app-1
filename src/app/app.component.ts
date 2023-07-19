import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName: string = 'Pune';
  weatherData: WeatherData | undefined;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  private getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (res: WeatherData) => {
        this.weatherData = res;
        console.log(res);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}

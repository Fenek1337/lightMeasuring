#include <Wire.h> //Implementacja biblioteki Wire dla IC2

#include <LiquidCrystal_I2C.h> //Implementacja biblioteki NewLiquidCrystal dla IC2


const int  en = 2, rw = 1, rs = 0, d4 = 4, d5 = 5, d6 = 6, d7 = 7, bl = 3;//Zdefiniowanie Pinoutu LCD

const int i2c_addr = 0x3F; //Zdefiniowanie adresu dla IC2,można zmienić
// Definiowanie podłaczenia wyświetlacza
LiquidCrystal_I2C lcd(0x27, 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE);  // Ustawienie adresu ukladu na 0x27
//Zmienne fotorezystory
int fotorezystor0 = 0;
int fotorezystor1 = 0;
int fotorezystor2 = 0;
int fotorezystor3 = 0;
int fotorezystor4 = 0;
int fotorezystor5 = 0;
int fotorezystor6 = 0;
int fotorezystor7 = 0;
int fotorezystor8 = 0;
int fotorezystor9 = 0;
int fotorezystor10 = 0;
int fotorezystor11 = 0;
int fotorezystor12 = 0;
int fotorezystor13 = 0;
int fotorezystor14 = 0;
int fotorezystor15 = 0;

//Zmienne volty
float volty0 = 0;
float volty1 = 0;
float volty2 = 0;
float volty3 = 0;
float volty4 = 0;
float volty5 = 0;
float volty6 = 0;
float volty7 = 0;  
float volty8 = 0;
float volty9 = 0;
float volty10 = 0;
float volty11 = 0;
float volty12 = 0;
float volty13 = 0;
float volty14 = 0;
float volty15 = 0;

//Srednia
int srednia = 0;
  
void setup() {
  // Port Szeregowy
  Serial.begin(9600);
  // Ustawianie LCD na 16 znaków ,4 wiersze.
  lcd.begin(16,4);
  lcd.backlight(); // zalaczenie podwietlenia
  
}

void loop() {
  
  lcd.backlight(); // zalaczenie podwietlenia
  
  //Odczytywanie wartosci z czujnikow
  fotorezystor0 = analogRead(A0);
  fotorezystor1 = analogRead(A1);
  fotorezystor2 = analogRead(A2);
  fotorezystor3 = analogRead(A3);
  fotorezystor4 = analogRead(A4);
  fotorezystor5 = analogRead(A5);
  fotorezystor6 = analogRead(A6);
  fotorezystor7 = analogRead(A7);
  fotorezystor8 = analogRead(A8);
  fotorezystor9 = analogRead(A9);
  fotorezystor10 = analogRead(A10);
  fotorezystor11 = analogRead(A11);
  fotorezystor12 = analogRead(A12);
  fotorezystor13 = analogRead(A13);
  fotorezystor14 = analogRead(A14);
  fotorezystor15 = analogRead(A15);
  
  //Zmienne volty po pomiarach
  volty0 = fotorezystor0*0.004887585532746823069403714565;
  volty1 = fotorezystor1*0.004887585532746823069403714565;
  volty2 = fotorezystor2*0.004887585532746823069403714565;
  volty3 = fotorezystor3*0.004887585532746823069403714565;
  volty4 = fotorezystor4*0.004887585532746823069403714565;
  volty5 = fotorezystor5*0.004887585532746823069403714565;
  volty6 = fotorezystor6*0.004887585532746823069403714565;
  volty7 = fotorezystor7*0.004887585532746823069403714565;
  volty8 = fotorezystor8*0.004887585532746823069403714565;
  volty9 = fotorezystor9*0.004887585532746823069403714565;
  volty10 = fotorezystor10*0.004887585532746823069403714565;
  volty11 = fotorezystor11*0.004887585532746823069403714565;
  volty12 = fotorezystor12*0.004887585532746823069403714565;
  volty13 = fotorezystor13*0.004887585532746823069403714565;
  volty14 = fotorezystor14*0.004887585532746823069403714565;
  volty15 = fotorezystor15*0.004887585532746823069403714565;
  
  //obliczanie sredniej
  srednia=(fotorezystor0+fotorezystor1+fotorezystor2+fotorezystor3+fotorezystor4+fotorezystor5+fotorezystor6+fotorezystor7+fotorezystor8+fotorezystor9+fotorezystor10+fotorezystor11+fotorezystor12+fotorezystor13+fotorezystor14+fotorezystor15)/16;
  
  //Fotorezystor 0
  Serial.println("Czujnik 1 = ");
  Serial.print((500/((10.72/(5-volty0))*volty0)), 2); //wzor na obliczanie luxow
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 1
  Serial.println("Czujnik 2 = ");
  Serial.print((500/((10.72/(5-volty1))*volty1)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 2
  Serial.println("Czujnik 3 = ");
  Serial.print((500/((10.72/(5-volty2))*volty2)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 3
  Serial.println("Czujnik 4 = ");
  Serial.print((500/((10.72/(5-volty3))*volty3)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 4
  Serial.println("Czujnik 5 = ");
  Serial.print((500/((10.72/(5-volty4))*volty4)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 5
  Serial.println("Czujnik 6 = ");
  Serial.print((500/((10.72/(5-volty5))*volty5)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 6
  Serial.println("Czujnik 7 = ");
  Serial.print((500/((10.72/(5-volty6))*volty6)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 7
  Serial.println("Czujnik 8 = ");
  Serial.print((500/((10.72/(5-volty7))*volty7)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 8
  Serial.println("Czujnik 9 = ");
  Serial.print((500/((10.72/(5-volty8))*volty8)), 2);
  Serial.print(" Lux.");
  Serial.println("");

  //Fotorezystor 9
  Serial.println("Czujnik 10 = ");
  Serial.print((500/((10.72/(5-volty9))*volty9)), 2);
  Serial.print(" Lux.");
  Serial.println("");
  
  //Fotorezystor 10
  Serial.println("Czujnik 11 = ");
  Serial.print((500/((10.72/(5-volty10))*volty10)), 2);
  Serial.print(" Lux.");
  Serial.println("");
  
  //Fotorezystor 11
  Serial.println("Czujnik 12 = ");
  Serial.print((500/((10.72/(5-volty11))*volty11)), 2);
  Serial.print(" Lux.");
  Serial.println("");  
  
  //Fotorezystor 12
  Serial.println("Czujnik 13 = ");
  Serial.print((500/((10.72/(5-volty12))*volty12)), 2);
  Serial.print(" Lux.");
  Serial.println("");
  
  //Fotorezystor 13
  Serial.println("Czujnik 14 = ");
  Serial.print((500/((10.72/(5-volty13))*volty13)), 2);
  Serial.print(" Lux.");
  Serial.println("");
  
  //Fotorezystor 14
  Serial.println("Czujnik 15 = ");
  Serial.print((500/((10.72/(5-volty14))*volty14)), 2);
  Serial.print(" Lux.");
  Serial.println("");
  
  //Fotorezystor 15
  Serial.println("Czujnik 16 = ");
  Serial.print((500/((10.72/(5-volty15))*volty15)), 2);
  Serial.print(" Lux.");
  Serial.println("");
  
  //Srednia
  Serial.println("Srednia = ");
  Serial.print(srednia);
  Serial.print(" Lux.");
  Serial.println("");
  
  delay(30000); //czeka na kolejne pomiary - 30 sekund.

//Tabela
// 0,002 lux - Bezksięzycowe bezchmurne niebo nocne 
// 0.27 - 1 lux - bezchmurne niebo z księzycem w pełni 
// 50 lux - Pokój rodzinny
// 80 lux - Korytarz
// 300 - 500 lux - zachód słońca lub wschód jego w bezchmurny dzień
// 1,000 lux Oświetlenie studia telewizyjnego
// 10,000 - 25,000 lux - Południe w słońcu
// 10,000 - 25,000 lux - Południe w słońcu
// 32,000 - 130,000 lux Południe w słońcu patrząc w kierunku słońca
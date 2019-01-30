#include <Wire.h> //Implementacja biblioteki Wire dla IC2

#include <LiquidCrystal_I2C.h> //Implementacja biblioteki NewLiquidCrystal dla IC2


float lux_0=0.00,ADC_wartosc0=0.0048828125,LDR_wartosc0;//Definiowanie zmiennych
float lux_1=0.00,ADC_wartosc1=0.0048828125,LDR_wartosc1;
float lux_2=0.00,ADC_wartosc2=0.0048828125,LDR_wartosc2;
float lux_3=0.00,ADC_wartosc3=0.0048828125,LDR_wartosc3;
float lux_4=0.00,ADC_wartosc4=0.0048828125,LDR_wartosc4;
float lux_5=0.00,ADC_wartosc5=0.0048828125,LDR_wartosc5;
float lux_6=0.00,ADC_wartosc6=0.0048828125,LDR_wartosc6;
float lux_7=0.00,ADC_wartosc7=0.0048828125,LDR_wartosc7;
float lux_8=0.00,ADC_wartosc8=0.0048828125,LDR_wartosc8;
float lux_9=0.00,ADC_wartosc9=0.0048828125,LDR_wartosc9;
float lux_10=0.00,ADC_wartosc10=0.0048828125,LDR_wartosc10;
float lux_11=0.00,ADC_wartosc11=0.0048828125,LDR_wartosc11;
float lux_12=0.00,ADC_wartosc12=0.0048828125,LDR_wartosc12;
float lux_13=0.00,ADC_wartosc13=0.0048828125,LDR_wartosc13;
float lux_14=0.00,ADC_wartosc14=0.0048828125,LDR_wartosc14;
float lux_15=0.00,ADC_wartosc15=0.0048828125,LDR_wartosc15;

void setup() {
  pinMode(A0,INPUT);//Definiowanie pinów
  pinMode(A1,INPUT);
  pinMode(A2,INPUT);
  pinMode(A3,INPUT);
  pinMode(A4,INPUT);
  pinMode(A5,INPUT);
  pinMode(A6,INPUT);
  pinMode(A7,INPUT);
  pinMode(A8,INPUT);
  pinMode(A9,INPUT);
  pinMode(A10,INPUT);
  pinMode(A11,INPUT);
  pinMode(A12,INPUT);
  pinMode(A13,INPUT);
  pinMode(A14,INPUT);
  pinMode(A15,INPUT);

  Serial.begin(9600);//Inicjacja portu szeregowego (COM)
}

void loop() {

  
  LDR_wartosc0=analogRead(A0);
  lux_0=(250.000000/
  (ADC_wartosc0*LDR_wartosc0))-50.000000;
  Serial.print("Wartosc Czujnika 0 =");
  Serial.print(lux_0);


  LDR_wartosc1=analogRead(A1);
  lux_1=(250.000000/
  (ADC_wartosc1*LDR_wartosc1))-50.000000;
  Serial.print("Wartosc Czujnika 1 =");
  Serial.print(lux_1);


  LDR_wartosc2=analogRead(A2);
  lux_2=(250.000000/
  (ADC_wartosc2*LDR_wartosc2))-50.000000;
  Serial.print("Wartosc Czujnika 2 =");
  Serial.print(lux_2);

  LDR_wartosc3=analogRead(A3);
  lux_3=(250.000000/
  (ADC_wartosc3*LDR_wartosc3))-50.000000;
  Serial.print("Wartosc Czujnika 3 =");
  Serial.print(lux_3);


  LDR_wartosc4=analogRead(A4);
  lux_4=(250.000000/
  (ADC_wartosc4*LDR_wartosc4))-50.000000;
  Serial.print("Wartosc Czujnika 4 =");
  Serial.print(lux_4);


  LDR_wartosc5=analogRead(A5);
  lux_5=(250.000000/
  (ADC_wartosc5*LDR_wartosc5))-50.000000;
  Serial.print("Wartosc Czujnika 5 =");
  Serial.print(lux_5);


  LDR_wartosc6=analogRead(A6);
  lux_6=(250.000000/
  (ADC_wartosc6*LDR_wartosc6))-50.000000;
  Serial.print("Wartosc Czujnika 6 =");
  Serial.print(lux_6);

  LDR_wartosc7=analogRead(A7);
  lux_7=(250.000000/
  (ADC_wartosc1*LDR_wartosc1))-50.000000;
  Serial.print("Wartosc Czujnika 7 =");
  Serial.print(lux_7);


  LDR_wartosc8=analogRead(A8);
  lux_8=(250.000000/
  (ADC_wartosc8*LDR_wartosc8))-50.000000;
  Serial.print("Wartosc Czujnika 8 =");
  Serial.print(lux_8);


  LDR_wartosc9=analogRead(A9);
  lux_9=(250.000000/
  (ADC_wartosc9*LDR_wartosc9))-50.000000;
  Serial.print("Wartosc Czujnika 9 =");
  Serial.print(lux_9);

  LDR_wartosc10=analogRead(A10);
  lux_10=(250.000000/
  (ADC_wartosc1*LDR_wartosc10))-50.000000;
  Serial.print("Wartosc Czujnika 10 =");
  Serial.print(lux_10);

  LDR_wartosc11=analogRead(A11);
  lux_11=(250.000000/
  (ADC_wartosc11*LDR_wartosc11))-50.000000;
  Serial.print("Wartosc Czujnika 11 =");
  Serial.print(lux_11);


  LDR_wartosc12=analogRead(A12);
  lux_12=(250.000000/
  (ADC_wartosc12*LDR_wartosc12))-50.000000;
  Serial.print("Wartosc Czujnika 12 =");
  Serial.print(lux_12);


  LDR_wartosc13=analogRead(A13);
  lux_13=(250.000000/
  (ADC_wartosc13*LDR_wartosc13))-50.000000;
  Serial.print("Wartosc Czujnika 13 =");
  Serial.print(lux_13);


  LDR_wartosc14=analogRead(A14);
  lux_14=(250.000000/
  (ADC_wartosc14*LDR_wartosc14))-50.000000;
  Serial.print("Wartosc Czujnika 14 =");
  Serial.print(lux_14);


  LDR_wartosc15=analogRead(A15);
  lux_15=(250.000000/
  (ADC_wartosc15*LDR_wartosc15))-50.000000;
  Serial.print("Wartosc Czujnika 15 =");
  Serial.print(lux_15);

  delay(30000); //czeka na kolejne pomiary - 30 sekund
}

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
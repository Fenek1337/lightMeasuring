#include <Wire.h> //Implementation of Wire library for IC2

#include <LiquidCrystal_I2C.h> //Implementation of NewLiquidCrystal library for IC2


float lux_0=0.00,ADC_value0=0.0048828125,LDR_value0;//Defining variables
float lux_1=0.00,ADC_value1=0.0048828125,LDR_value1;
float lux_2=0.00,ADC_value2=0.0048828125,LDR_value2;
float lux_3=0.00,ADC_value3=0.0048828125,LDR_value3;
float lux_4=0.00,ADC_value4=0.0048828125,LDR_value4;
float lux_5=0.00,ADC_value5=0.0048828125,LDR_value5;
float lux_6=0.00,ADC_value6=0.0048828125,LDR_value6;
float lux_7=0.00,ADC_value7=0.0048828125,LDR_value7;
float lux_8=0.00,ADC_value8=0.0048828125,LDR_value8;
float lux_9=0.00,ADC_value9=0.0048828125,LDR_value9;
float lux_10=0.00,ADC_value10=0.0048828125,LDR_value10;
float lux_11=0.00,ADC_value11=0.0048828125,LDR_value11;
float lux_12=0.00,ADC_value12=0.0048828125,LDR_value12;
float lux_13=0.00,ADC_value13=0.0048828125,LDR_value13;
float lux_14=0.00,ADC_value14=0.0048828125,LDR_value14;
float lux_15=0.00,ADC_value15=0.0048828125,LDR_value15;

void setup() {
  pinMode(A0,INPUT);//Defining pins
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

  Serial.begin(9600);//Initiation of serial port (COM)
}

void loop() {

  
  LDR_value0=analogRead(A0);
  lux_0=(250.000000/
  (ADC_value0*LDR_value0))-50.000000;
  Serial.print("Value from sensor 0 =");
  Serial.print(lux_0);


  LDR_value1=analogRead(A1);
  lux_1=(250.000000/
  (ADC_value1*LDR_value1))-50.000000;
  Serial.print("value of sensor 1 =");
  Serial.print(lux_1);


  LDR_value2=analogRead(A2);
  lux_2=(250.000000/
  (ADC_value2*LDR_value2))-50.000000;
  Serial.print("value of sensor 2 =");
  Serial.print(lux_2);

  LDR_value3=analogRead(A3);
  lux_3=(250.000000/
  (ADC_value3*LDR_value3))-50.000000;
  Serial.print("value of sensor 3 =");
  Serial.print(lux_3);


  LDR_value4=analogRead(A4);
  lux_4=(250.000000/
  (ADC_value4*LDR_value4))-50.000000;
  Serial.print("value of sensor 4 =");
  Serial.print(lux_4);


  LDR_value5=analogRead(A5);
  lux_5=(250.000000/
  (ADC_value5*LDR_value5))-50.000000;
  Serial.print("value of sensor 5 =");
  Serial.print(lux_5);


  LDR_value6=analogRead(A6);
  lux_6=(250.000000/
  (ADC_value6*LDR_value6))-50.000000;
  Serial.print("value of sensor 6 =");
  Serial.print(lux_6);

  LDR_value7=analogRead(A7);
  lux_7=(250.000000/
  (ADC_value1*LDR_value1))-50.000000;
  Serial.print("value of sensor 7 =");
  Serial.print(lux_7);


  LDR_value8=analogRead(A8);
  lux_8=(250.000000/
  (ADC_value8*LDR_value8))-50.000000;
  Serial.print("value of sensor 8 =");
  Serial.print(lux_8);


  LDR_value9=analogRead(A9);
  lux_9=(250.000000/
  (ADC_value9*LDR_value9))-50.000000;
  Serial.print("value of sensor 9 =");
  Serial.print(lux_9);

  LDR_value10=analogRead(A10);
  lux_10=(250.000000/
  (ADC_value1*LDR_value10))-50.000000;
  Serial.print("value of sensor 10 =");
  Serial.print(lux_10);

  LDR_value11=analogRead(A11);
  lux_11=(250.000000/
  (ADC_value11*LDR_value11))-50.000000;
  Serial.print("value of sensor 11 =");
  Serial.print(lux_11);


  LDR_value12=analogRead(A12);
  lux_12=(250.000000/
  (ADC_value12*LDR_value12))-50.000000;
  Serial.print("value of sensor 12 =");
  Serial.print(lux_12);


  LDR_value13=analogRead(A13);
  lux_13=(250.000000/
  (ADC_value13*LDR_value13))-50.000000;
  Serial.print("value of sensor 13 =");
  Serial.print(lux_13);


  LDR_value14=analogRead(A14);
  lux_14=(250.000000/
  (ADC_value14*LDR_value14))-50.000000;
  Serial.print("value of sensor 14 =");
  Serial.print(lux_14);


  LDR_value15=analogRead(A15);
  lux_15=(250.000000/
  (ADC_value15*LDR_value15))-50.000000;
  Serial.print("value of sensor 15 =");
  Serial.print(lux_15);

  delay(30000); //waits 30s for next measurement 
}

//Table
// 0,002 lux = crescent cloudless night sky
// 0,27 - 1 lux = clear sky with full moon
// 50 lux = living room
// 80 lux = corridor
// 300 - 500 lux = sunset or sunrise on a cloudless day
// 1,000 lux = television studio lighting
// 10,000 - 25,000 lux = midday in the sun
// 32,000 - 130,000 lux = looking at the sun in midday
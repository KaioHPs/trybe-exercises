let salarioBruto = 3000.00, salarioBase, salarioLiquido, INSS;

if(salarioBruto<=1556.94){
  INSS = 0.08;
  salarioBase = salarioBruto - (salarioBruto*INSS);
  calculoIR(salarioBase);
} else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
  INSS = 0.09;
  salarioBase = salarioBruto - (salarioBruto*INSS);
  calculoIR(salarioBase);
} else if(salarioBruto>=2594.93 && salarioBruto<=5189.82){
  INSS = 0.11;
  salarioBase = salarioBruto - (salarioBruto*INSS);
  calculoIR(salarioBase);
} else if(salarioBruto>5189.82){
  INSS = 570.88;
  salarioBase = salarioBruto - INSS;
  calculoIR(salarioBase);
}

function calculoIR(base){
  let IR, parcelaIR;
  if(base<=1903.98){
    IR = 0;
    parcelaIR = 0;
    salarioLiquido = base;

  } else if(base>=1903.99 && base<=2826.65){
    IR = 0.075;
    parcelaIR = 142.80;
    salarioLiquido = base - ((base*IR)-parcelaIR);

  } else if(base>=2826.66 && base<=3751.05){
    IR = 0.15;
    parcelaIR = 354.80;
    salarioLiquido = base - ((base*IR)-parcelaIR);

  } else if(base>=3751.06 && base<=4664.68){
    IR = 0.225;
    parcelaIR = 636.13;
    salarioLiquido = base - ((base*IR)-parcelaIR);

  } else if(base>4664.68){
    IR = 0.275;
    parcelaIR = 869.36;
    salarioLiquido = base - ((base*IR)-parcelaIR);

  }

  console.log(salarioLiquido);

}
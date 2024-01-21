//Homework1
function myBlend(array) {
    array.sort(() => Math.random() - 0.5);
    console.log(array);
}
const array = [1, 33, 3, 18, 5];

myBlend(array);

//Homework2
const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

    const checkCompanyName = (company, name) => {
        if (company.name === name) {
            const { partners, ...rest } = company;
        
            return rest;
          }
          if (company.hasOwnProperty('partners')){
            for (let sub of company.partners){
              const result =  checkCompanyName(sub, name);
              if (result) return result;
            }
          }
      };
      
      const findValueByKey = (companyName) => {
        if (company.name === companyName) {
            const { clients, ...rest } = company;
        
            return rest;
          }
          for (let sub of company.clients){
            const result = checkCompanyName(sub, companyName);
            if (result) return result;
        };
        return 'Company doesn\'t exist';
      };
      
      console.log(findValueByKey('Клієнт 1.2.3'));

      
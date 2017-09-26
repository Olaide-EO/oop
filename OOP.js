class BankAccount{

	           constructor(accNumber, accName, age){

                      this._accountNumber = accNumber;
                      this._accountName = accName;
                      this._balance = 0
                      this._age = age;
	                    }

	                   get accountName(){
	          return this._accountName.toUpperCase();

	              }

                       get accountNumber(){

              return this._accountNumber;

                  }

                       get balance(){

              return this._balance;
        
                  }
                  
                  
                       set  age(newAge) {
                         
                       this._age = newAge;  
                       
                  }
                  
                  
                        get   age() {
                         
                       return this._age 
                       
                  }
                  
                  
             
                       deposit(amount){

                               if(amount > 0){

                                    this._balance += amount;
                                    
                                     return true;

                              }else{
                                     return false;
                                   }
                          }
   
                       withdraw(amount){

                                if(amount> this._balance){

                                     return false;
                 
                               }else{
 
                       
                                    this._balance -= amount;
                       
                                     return true;
                                    }
                          }
              }


    class SavingAccount extends BankAccount{
     
                     constructor(accNumber, accName, rate){

                            super(accNumber,accName);

                           this.interestRate = rate;
                           }

             
                        addInterest(){

                                this.interest = getBalance() * this.interestRate/100;
                                
                                deposit(this.interest);  
                                    }
                            }
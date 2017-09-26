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


     class CheckingAccount extends BankAccount{

                      constructor(accNumber,accName){

                        super(accNumber, accName);

                        this._transactionCount = 0;
                        this._numFree = 2;
                        this._transFee = 5; 
                   
                               }

                        deposit(amount){
                             
                             if(super.deposit(amount)){
                            
                            this._transactionCount++;
          
                               return true;
                               }
                 
                                 return false;
                               }
                  
                        withdraw(amount){
                           
                               if(super.withdraw(amount)){
                            
                              this._transactionCount++;
                              return true;
                              }
                                return false;
                                }
        
                        deductFees(){

                               if(this._transactionCount > this._numFree){

                                 const fees = this._transFee * (this._transactionCount - this._numFree);

                              if(super.withdraw(fees)){
                                
                                  this._transactionCount = 0;
                                              }
                                   }
                               }


                  }
        

         /*
   
      const
      
   const user = new CheckingAccount(2006733607, "Tolulope Nathaniel");
    
    console.log(user.accountName); // TOLULOPE NATHANIEL
    
    user.deposit(234000);         
    console.log(user.balance);  //234000
    user.deductFees();
    console.log(user.balance);  //234000
    user.withdraw(2066);
    console.log(user.balance);  //231934
    user.withdraw(31934);      
    console.log(user.balance);  //200000
    user.deductFees();
    console.log(user.balance);  //199995
    
    */
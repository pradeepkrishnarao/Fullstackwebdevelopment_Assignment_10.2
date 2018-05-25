/* Airplane class has constructor parameters name, occupancy and speed */
		class Airplane {
		
			constructor(name,occupancy,speed){    
		
				this.name=name;
				this.occupancy=occupancy;
				this.speed=speed;
				
			}
/* Validation to check name cannot be empty */
			set Name(name) {
			
                if (name == undefined || name == '') {
					
                    throw new Error("Name cannot be empty");
                }
				
                this.name = name;	
				
            }
/* Returns name value */
			get Name() {
			
                return this.name;
				
            }
/* Validation to check occupancy cannot be empty, should not be negative and should not be more than 180 */
			set Occupancy(occupancy) {
			
                if (occupancy == undefined || occupancy == '') {
					
                    throw new Error("Occupancy cannot be empty");
					
                }
				
				if (occupancy < 0) {
			
                    throw new Error("Occupancy cannot be negative");
					
                }
				
				if (this.occupancy + occupancy > 180) {
			
                    throw new Error("Occupancy cannot be more than 180");
					
                }
				
				this.occupancy=occupancy;
				
		}
/* Returns occupancy value */
			get Occupancy() {
			
                return this.occupancy;
				
            }
/* Validation to check speed cannot be empty, should not be negative and should not be more than 900 */
			set Speed(speed) {
			
                if (speed == undefined || speed == '') {
					
                    throw new Error("Speed cannot be empty");
					
                }	
				
				if (speed < 0) {
				
                    throw new Error("Speed cannot be negative");
					
                }
				
				if (this.speed + speed >= 901) {
					
                    throw new Error("Speed cannot be more than 900");
					
                }
				
				this.speed=speed;
		}
/* Returns speed value */
			get Speed() {
			
                return this.speed;
				
            }
/* increaseSpeed is a method with parameter increase */
			increaseSpeed(increase) {
				
                this.speed += increase;
				
            }
/* decreaseSpeed is a method with parameter decrease */
			decreaseSpeed(decrease) {
				
                this.speed -= decrease;
				
            }
			
			status(){
			
            console.log("Airplane:"+this.name+" with "+this.occupancy+","+" occupancy, is moving at "+this.speed+" km/hr");
			
        }
    }

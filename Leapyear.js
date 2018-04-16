function leapyear(year){
    if(year%100===0){
      if(year%4===0 && year%400 ===0){
        return "leap year";
      }
      else{
        return "not leap year";
      }
    }
    else if (year%4===0){
      return "leap year";
    }
    
    return "not leap year";
  }
  
  var ly_arr = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020];
  
  var x = leapyear(1976);
  console.log(x);
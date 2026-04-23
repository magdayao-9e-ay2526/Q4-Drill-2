function checkHeat(){
    let Temperature = (document.getElementById("temperature").value);
    let Humidity = (document.getElementById("humidity").value);
    let HeatIndex = Temperature + (0.33 * Humidity) - 4;
    
    if(HeatIndex <= 27){
        window.alert("Heat Index: " + HeatIndex + "Status: Comfortable/Cool")
    }
    else if (HeatIndex >= 28 && HeatIndex <= 32){
            window.alert("Heat Index: " + HeatIndex + "Status: Warm")
        }
    else if (HeatIndex >= 33 && HeatIndex <= 37){
            window.alert("Heat Index: " + HeatIndex + "Status: Hot")
    }
    else if (HeatIndex >= 38 && HeatIndex <= 41){
                window.alert("Heat Index: " + HeatIndex + "Status: Very Hot/Caution")
        }
    else if (HeatIndex >= 42){
        window.alert("Heat Index: " + HeatIndex + "Status: Extreme Heat/Danger")
    }
        
}
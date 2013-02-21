_KlasaObiektu = function() {
    this.o = this;
    this.imie = 'Marcin';
    this.wzrost = 183
    this.guzik = null; 
     
    this.init = function() {        
        var ob = this.o;
        ob.guzik = document.createElement('input');
        ob.guzik.onclick = function() {
            this.value = ob.wzrost
        }
        document.getElementsByTagName('body')[0].appendChild(ob.guzik);
    }
    this.init();
     
}

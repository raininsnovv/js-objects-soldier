const soldier = {
    name:Michael,
    health:10,
    weapon:{
    model:'desert eagle',
    cartridges:30
    },
    ammunitions:3,
    fire(){
    this.weapon.cartridges--
    if(this.weapon.cartridges<=0){
        return 'Обойма пуста. Перезарядитесь.'
    }
    },
    reload(){

    this.weapon.cartridges=30
    this.ammunitions--
    console.log('Перезарядка...')
    if(this.ammunitions===0){
        return 'Не осталось припасов,остались голые кулаки...'
    }
    },
    injure(){
        this.health--
        if(this.health<=0){
            console.log('Ты проиграл...')
        }
    },
}
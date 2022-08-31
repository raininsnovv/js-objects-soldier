const soldier = {
  name: "Michael",
  health: 10,
  weapon: {
    model: "desert eagle",
    cartridges: 30,
  },
  ammunitions: 3,
  fire() {
    if (this.weapon.cartridges > 0) {
      console.log("Вижу цель! Огонь!");
      this.weapon.cartridges--;
    }
    if (this.weapon.cartridges <= 0) {
      console.log("Обойма пуста. Перезарядитесь.");
    }
  },
  reload() {
    if (this.weapon.ammunitions !== 0 && this.weapon.cartridges === 0) {
      this.weapon.cartridges = 30;
      this.ammunitions--;
      console.log("Прикройте меня, перезаряжаюсь!");
    }
    if (this.ammunitions === 0) {
      console.log("Не осталось припасов,остались голые кулаки...");
    }
  },
  injure() {
    if (this.health >= 0) {
      this.health--;
      console.log("Кто меня ранил!?");
    }
    if (this.health <= 0) {
      console.log("Смерть неизбежна, ты проиграл...");
    }
  },
};
soldier.fire();
soldier.reload();
soldier.injure((soldier.health = 0));

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
  return dragon.damage = Math.floor(Math.random() * (dragon.strength - 15) + 15)
}

const warriorWeaponDmg = () => {
  return warrior.weaponDmg = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength)
}

const damageManaMagePerRound = () => {
  const damageMana = {};
  mage.damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence)
  mage.mana = 15;
  
  if(mage.mana < 15) {
    mage.mana = 0;
    return `Mana: ${mage.mana}. Não possui mana suficiente`
  }

  damageMana.dano = `${mage.damage}`
  damageMana.mana = `${mage.mana}`

  return damageMana;
}

const gameActions = {
};
function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
  }
  
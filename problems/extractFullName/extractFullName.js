function extractFullName(people) {
  const fullNames = people.map((person) => {
    return `${person.first} ${person.last}`;
  });

  return fullNames;
}

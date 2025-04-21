import React from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#eee',
    fontWeight: 'bold',
  },
});

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((acc, item) => {
    const group = item.name.last[0].toUpperCase();
    if (acc[group]) {
      acc[group].data.push(item);
    } else {
      acc[group] = { title: group, data: [item] };
    }
    return acc;
  }, {});

  const sections = Object.keys(groupedData).map((key) => groupedData[key]);
  return sections.sort((a, b) => (a.title > b.title ? 1 : -1)); // 🔁 Sort theo A-Z
};

const PEOPLE = [
  {
    name: {
      title: "Ms",
      first: "Maeva",
      last: "Scott"
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maelle",
      last: "Henry"
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaij"
    },
  },
];

const ListName = () => {
  return (
    <SafeAreaView>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default ListName;

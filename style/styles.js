import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // 🔹 Список / общие
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    zIndex: 1,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    padding: 8,
    marginTop: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 5,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  bought: {
    fontSize: 16,
    fontWeight: '600',
    color: 'green',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },

  // 🔹 Модальные окна
  modal: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  // 🔹 Кнопки
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  // 🔹 Поля ввода
  input: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },

  // 🔹 Авторизация
  authFlex: {
    flex: 1,
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  authTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  authInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  authLink: {
    color: 'blue',
    marginTop: 15,
    textAlign: 'center',
  },

  // 🔹 Детали продукта
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },

  // 🔹 Изображение (добавление товара)
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
});

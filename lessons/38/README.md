### Emoji
---
Выша задача реализовать поиск эмоджи по следующим данным - [json](./emojiList.json)

Шаги по реализации:
- Используйте Typescript
- Сделайте загрузку списка emoji через fetch. Используя Raw версию файла на github.
- Поле поиска должно быть отдельным компонентом
- Строка поиска должна храниться в `App` компоненте
- Компонент `EmojiContainer` должен принимать строку поиска по емоджи (искать можно как по названию - `title`, так и по ключевым словам - `keywords`);
- Компонент `EmojiContainer` должен рендерить другой компонент - `EmojiRow`;
- Компонент `EmojiRow` должен отображать иконку эмоджи и название:

  ![](https://user-images.githubusercontent.com/15867703/119798498-dd9f7280-bee3-11eb-9bd6-1ff1a94f669e.png)
    + вы можете отображать стандартную эмоджи либо ->;
    + отображать картинку по URL [![](https://data.jsdelivr.com/v1/package/npm/emojione/badge)](https://www.jsdelivr.com/package/npm/emojione) (используйте след путь : `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`, где `codePointHex` можно получить как `symbol.codePointAt(0).toString(16)`)
- используйте лимит отображения эмоджи - напрмер не больше 15 найденных! (можно реализовать дропдаун с выбором лимита строк);
---
Финальный пример:


![Final example](https://user-images.githubusercontent.com/15867703/119798506-ded09f80-bee3-11eb-997a-b0a9ddc1d23b.gif)

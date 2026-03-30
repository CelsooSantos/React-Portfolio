<<<<<<< HEAD
[**Main Overview**](./README.md) | [**Technical Documentation**](#)
=======
[**Main Overview**](./readme.md) | [**Technical Documentation**](#)
>>>>>>> ab2eb0c4bc04f2a569a1f784c4084a08e0817fbb

# Project Documentation

This documentation provides a technical overview of the website's structure, component logic, and internationalization workflow.

---

## 🛠 Tech Stack Core
* **Framework:** Next.js
* **Icons:** `lucide-react`
* **Text animations:** `react-typed`
* **Internationalization:** `next-intl`
* **Styling:** TailwindCSS and custom CSS
* **SVGs:** [VectorLogoZone](https://www.vectorlogo.zone/)

---

## Structure

### 1. Banner Section (`Banner_intro.tsx`)
The hero section utilizes the `ReactTyped` component to create a dynamic typing and deleting animation for introductory text. 
* **Customization:** Edit the strings within the `ReactTyped` instance to change the cycling phrases.

### 2. About Section
A static content block consisting of a localized title and body text.

### 3. Experience Section
This section splits logic between a container and a presentational component.

| File | Description |
| :--- | :--- |
| `page.tsx` | The structural "skeleton." Content is populated by mapping the `let xpT` map. |
| `project.tsx` | The UI card template for individual entries. |

**Data Interface for Projects:**
* `title`: Name of the project.
* `subtitle`: Project category or role.
* `src`: Image path (stored in `/public`).
* `date`: Duration string.
* `cat`: Category in number (1 or 2);
    * 1 is associated to education/professional experiences; 
    * 2 for personal projects.
* `skills`: `string[]` - Array of technologies used.
* `altImage`: Accessibility text for the image.

### 4. Skills Section
Skills are categorized and rendered via the `skillLists` function.
* **Type `SkillLists`:** `{ id: number; skillIcon: string; skillName: string; }`
* **Rendering Logic:** `skillLists(list: SkillLists[], category: any)` renders a category group. Icons are referenced by their path (e.g., `"/icon.svg"`).

### 5. Contacts (Footer)
A component containing:
* Legal links (Privacy Policy).
* Navigation and external resource links.

---

## Internationalization (i18n)

Handled via `next-intl`. Content resides in the `/messages` directory.

### Adding New Languages
1.  **Locales:** Update `routing.js` by adding the new language code to the `locales` array.
2.  **Translations:** Create a corresponding JSON file (e.g., `fr.json`) in the `/messages` folder.
3.  **SEO & Slugs:** In `routing.js`, ensure all `pathnames` are translated to the new language to improve search engine visibility.
  
> **Language Switching Logic:** The language toggle triggers a full URL refresh (e.g., switching from `/en` to `/pt`). This prevents a "Light Mode blink" issue where the theme state wouldn't sync instantly with a client-side transition.  
> **Buttons:** As the button logic is implemented is only possible to switch between two languages, to add more is essential to update the button first.

---

## Light/Dark mode

The site supports Light and Dark modes using a CSS class strategy.

* **Logic:** The `.dark` class is applied to the html element.
* **CSS Variables:** All components should use CSS variables for colors (e.g., `--background`, `--text`) to ensure the UI updates automatically when the class changes.
* **Persistence:** The system detects the user's OS preference on the first visit.

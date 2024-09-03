To run this code:

- `npm install` or `yarn`
- `npm run start` or `yarn start`

The relevant files in the src folder to work with are:
- table-script.tsx -> contains the relevant code for preparing and displaying the data
- source-data.json -> contains all the relevant data needed for the exercise

### User Story 📖

<b>As an</b> account manager, I want to have an overview of all bookings assigned to different account groups, so that I can compare the different areas to regulate expenses.

### Detailed Requirements Description 📄

Incoming invoices are assigned to a specific account area, category and cost type.

For this task a dashboard named “Aufwand je Bereich und Kategorie“ needs to be implemented.

The columns should be:

    Bereich | Summe | Januar | Februar | …

`Summe` (= sum) should sum the whole line, summing all the months from the line.

There should be a column for each month.

`Bereich` (=area) should show the account groups, expenses can be assigned on.
Groups have a sub-group called `Kategorien` (= Categories). Each group has a specified set of Categories.

Each Category also has sub-categories called `Kostenart` (= Cost Type). Each Category has a specified set of Cost Types.

Since Cost Types are the sub-sub-data, the actual values are written on the Cost types.

Now when looking at the Dashboard, one should only see the Bereiche (areas):

| Bereich  | Kategorie | Kostenart | Summe | Januar | Februar |
| -------- | --------- | --------- | ----- | ------ | ------- |
| Bereich1 |           |           | 100   | 70     | 30      |
| Bereich2 |           |           | 30    | 0      | 30      |
| Bereich3 |           |           | 200   |  100   | 100     |

Each of these `Bereiche` (areas) should be expandable, into multiple Categories:

| Bereich  | Kategorie  | Kostenart  | Summe | Januar | Februar |
| -------- | ---------- | ---------- | ----- | ------ | ------- |
| Bereich1 |            |            | 100   | 70     | 30      |
|          | Kategorie1 |            | 10    | 0      |  10     |
|          | Kategorie2 |            | 90    | 60     |  30     |
|          |            | Kostenart1 | 20    | 10     |  10     |
|          |            | Kostenart2 | 70    | 50     |  20     |
| Bereich2 |            |            | 30    | 0      |  30     |

All the `Kostenarten` (cost types) add up and are displayed for the corresponding `Kategorie` (category).
All `Kategorien` (categories) add up and are displayed for the corresponding `Bereich` (area).

Each `Bereich` and `Kategorie` should be expandable and collapsable, to show more detail.

### Acceptance Criteria ✅

1. Each `Bereich` should be shown in a separate line.
2. For each `Bereich` expanding should all the specific categories from this `Bereich` be displayed.
3. Vice versa for the `Kategorien`.
4. The actual data is displayed for the `Kostenarten` (cost types).
5. Each `Kategorie` shows a sum for all respective `Kostenarten`.
6. Vice versa for each `Bereich`.

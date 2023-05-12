import Card from '../../components/card/CardContainer'

export enum TABS_TYPE {
    cards = 'cards',
    learn = 'learn',
    test = 'test',
}
export const TABS = {
    [TABS_TYPE.cards]: {
        label: 'Карточки',
        component: Card,
    },
    [TABS_TYPE.learn]: {
        label: 'Заучивание',
        component: Card,
    },
    [TABS_TYPE.test]: {
        label: 'Тест',
        component: Card,
    }
}

import Card from '../../components/card/cardContainer'
import Empty from '../../components/empty/empty'
import Test from '../../components/testContent/testContentContainer'

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
        component: Empty,
    },
    [TABS_TYPE.test]: {
        label: 'Тест',
        component: Test,
    }
}

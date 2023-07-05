import Card from '../../components/card/cardContainer'
import Empty from '../../components/empty/empty'
import Test from '../../components/testContent/testContentContainer'

export enum TABS_TYPE {
    CARDS = 'cards',
    LEARN = 'learn',
    TEST = 'test',
}
export const TABS = {
    [TABS_TYPE.CARDS]: {
        label: 'Карточки',
        component: Card,
    },
    [TABS_TYPE.LEARN]: {
        label: 'Заучивание',
        component: Empty,
    },
    [TABS_TYPE.TEST]: {
        label: 'Тест',
        component: Test,
    }
}

import m from 'mithril';

import { isReadyToPlay, changeCategoryTitle, isPlaying } from '../../state/nerdquiz';
import PlayerForm from './playerForm';
import AddPlayerButton from '../players/addPlayerButton';
import { players } from '../../state/players';

export default {
  view: ({ attrs: { quiz } }) => m('.formview', [
    m('h2.categories-input-headline', 'CATEGORIES'),
    quiz.map((category, cindex) =>
      m('input.category-input', {
        value: category.title,
        onchange: m.withAttr('value', changeCategoryTitle(cindex)),
      })),
    m('button.button', {
      disabled: !isReadyToPlay(),
      onclick: () => {
        isPlaying(true);
      },
    }, 'GO!'),
    m('.players', [
      ...players().map(player => m(PlayerForm, { player })),
      m(AddPlayerButton),
    ]),
  ]),
};

import {h} from 'preact';
import {shallow, deep} from 'preact-render-spy';
import {render} from 'preact-render-to-string';
import Dimlight from './Dimlight';

it('lets you do cool things with preact components', () => {
    let comp = <Dimlight op="0.3"></Dimlight>;
    const context = deep(comp);
    console.log(render(comp));
    console.log(context.find('p'));
    expect(context.find('p').contains("Yeah baby")).toBeTruthy();
    /*
    context.find('[onClick]').simulate('click');

    expect(context.find('p').attr('style')).toBe({opacity:0.6});
     */
});


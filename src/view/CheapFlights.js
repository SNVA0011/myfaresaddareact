import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import Container from 'react-bootstrap/Container'
import Enginebox from '../Molecules/Home/Enginebox';

export default function CheapFlights() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='cheapflight-lar'>
            <Helmet>
                <title> Jordan</title>
                <meta name="description" content="jordan package" />
                <meta name="keywords" content=" best package in jordan" />
            </Helmet>

            <Enginebox smallbanner='smallbannercheap' />

            <div className='popular-destination blogaddalist details full-w'>
                <Container>


                    {/*============ blogaddalist-round ============*/}
                    <div className='blogaddalist-round'>
                        <div className='blogaddalist-inner'>
                            <div className="blog-inner-box2">
                                <p>
                                    <strong>India: </strong>
                                </p>
                                <p>
                                    A country in South Asia, India is the seventh largest in terms of area and
                                    has more than 1.3 billion population. It is the population which makes it
                                    the second populous country in the world after China. It is also the most
                                    populous democracy in the world. India is a country which is bounded by the
                                    Arabian Sea in the southwest, Indian ocean in the south, and the Bay of
                                    Bengal on the South East. India shares its land borders with Nepal, Bhutan,
                                    and China to the northeast, with Pakistan to the west, and with the Myanmar
                                    and Bangladesh to the east. It has the second largest standing army in the
                                    whole of the world. It comprises of 29 states and 7 union territories. Also,
                                    it comprises of a multi-lingual, pluralistic and multi-ethnic society.
                                </p>
                                <p>
                                    <strong>Cuisine:</strong>
                                </p>
                                <p>
                                    A wide variety of regional and traditional cuisines, it all depends on a
                                    state. The staple food of India includes whole-wheat flour, rice, a variety
                                    of lentils such as urad, moong, tur, masoor.
                                </p>
                                <p>
                                    <strong>When is the best time to visit India? &nbsp;</strong>
                                </p>
                                <p>
                                    If you want to visit India, then October to March is the perfect time to
                                    visit. The cold winds are stopped by the Himalayas to reach India. This is
                                    the reason that winters remain warm and summers get very hot. A tropical
                                    climate is found in the major portion of India and, therefore, India is
                                    affected by three main seasons- summer, winter, and monsoon.
                                </p>
                                <p>
                                    <strong>The best destination to visit in India:</strong>
                                </p>
                                <p>
                                    <strong>Goa: </strong>It is among the first few places in India when you are
                                    young and energetic. A variety of booze, amazing nightlife and beach shacks
                                    make Goa the best holiday destination in India and also your trip a
                                    memorable one.
                                </p>
                                <p>
                                    <strong>Mcleodganj – Heaven Amidst The Hills:</strong> If you want to enjoy
                                    the best of nature, then Mcleodganj is the place that you should visit. This
                                    destination is the loveliest if you want to go camping.
                                </p>
                                <p>
                                    <strong>Srinagar-the Gem of Kashmir:</strong> It is the time that you should
                                    add Kashmir and Srinagar in your list in order to experience heaven on
                                    earth. You can experience its charismatic charm if you visit this place from
                                    April to October.
                                </p>
                                <p>
                                    <strong>Andaman- the beach Heaven: </strong>If you do not know how to swim
                                    and you have hydrophobia, then this is the time to overcome your fear. Just
                                    do not worry. You will be delighted at the sites underwater. This place is a
                                    love for aqua lovers.
                                </p>
                                <p>
                                    <strong>Leh-Ladakh: </strong>Leh-Ladakh is on the list of every travel
                                    enthusiast before they turn 30. Riding on the crazy winding roads, sleeping
                                    with the locals, getting stuck in the middle of nowhere and learning to be
                                    independent on the deserted mountains are some of the things that inspire
                                    the adventurous persons to go to this place.
                                </p>
                                <p>
                                    <strong>Famous food to try in India:</strong>
                                </p>
                                <p>
                                    <strong>Butter Chicken: </strong>Chicken when marinating in yogurt and
                                    spices and when cooked with makhani and spices gives a unique flavor. This
                                    is called Butter chicken. This is one of the most popular dishes among
                                    non-vegetarians and is a pride of Punjabi cuisine.
                                </p>
                                <p>
                                    <strong>Masala Dosa: </strong>It is made up of crispy thin pancake,
                                    flatbread. This is made of rice batter and filled with mashed potato and is
                                    served with a variety of chutney and with lentils sauce. This dish can be
                                    found throughout India but it is best at the southern states of India
                                    especially Tamil Nadu and Karnataka where it is originated.
                                </p>
                                <p>
                                    <strong>Bhapa Ilish: </strong>This is everyone’s favorite dish of the people
                                    of Bengal. It is a traditional fish curry made of Hilsa Fish and mustard
                                    paste. If the curry is not cooked properly, it could taste bitter. This dish
                                    is best found in Kolkata and is served with steamed rice.
                                </p>
                                <p>
                                    <strong>Gulab Jamun: </strong>This is a small deep fried ball of dried milk
                                    that is slowly cooked and boiled in sugar syrup. This dessert should be well
                                    tried with a scoop of Vanilla Ice cream for once.
                                </p>
                             
                            </div>



                        </div>
                    </div>
                    {/*============ end blogaddalist-round ============*/}

                </Container>
            </div>

        </div>
    )
}

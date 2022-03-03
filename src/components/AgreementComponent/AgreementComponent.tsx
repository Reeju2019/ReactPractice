import React from "react";
import { Card, Button } from "react-bootstrap";
import "./styles.scss";

/**
 * @description Props of Agreement component
 * @memberof AgreementComponent
 */
/* eslint-disable */
interface IProps {}

/**
 * @description States of Agreement component
 * @memberof AgreementComponent
 */
/* eslint-disable */
interface IState {}

/**
 * @component
 * This component was used in App Component
 * @description Agreement Component
 */
class AgreementComponent extends React.Component<IProps, IState> {
  /**
   * @constructor
   * @description Constructor
   * @param {IProps} props Props
   */
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Card className="m-5" style={{ width: "90%" }}>
          <Card.Body>
            <Card.Title>Terms And Conditions</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Last updated: May 23,
            </Card.Subtitle>
            <Card.Text>
              We want you to like us, we do. But the internet is dangerous, and
              we don't like danger spilling over onto our website. So while some
              of this may seem OBVIOUS, we have to tell you because sometimes
              its good to be reminded. So when using our site we expect the
              following
              <br />
              Don't Spam, or use this site to sell your crap without our
              permission. This isa't the classified section of the newspaper;,
              Don't give us viruses or try and hack your way into our computers;
              Don't post comments on our blog that are useless; Don't be a
              robot. Robots are evil That means don't use auto posters that are
              meant to leave things like "You blog has great informashuns! Thank
              you! Best content 2007! I my wife tell me about your site, I say I
              no believe but she write..you best Site!" with anchor text to your
              crappy site about "Best Los Angeles Dog Groomers".
              Seriously..don't. <br />
              Don't be a jerkface. Ajerkface is someone who discriminates,
              defrauds, hates, or acts like an idiot. Don't do any of that. We'l
              ban you. Don't post things that you're not supposed to or don't
              have permission for. Don't do other things that we don't like,
              which is up to us. If you follow the rules, you can stay. Ifyou
              don't, we can kick you out, haul your ass to court, or tell the
              Alphabet boys what you've done so theyl put you under
              surveillance. Our failure to enforce against one person is not a
              waiver to enforce our rights at any time for the same or different
              offenses. Don't steal our stutf. By stuff, we mean the awesome
              content, advice, pictures, videos, sounds (ummm, not Sure what
              kind of sounds we'll make...but you can be sure you can't have
              them without our permission) (altogether known as
            </Card.Text>
            <Button
              className="me-4"
              onClick={() => {
                console.log("Declined");
              }}
              variant="outline-danger"
            >
              Decline
            </Button>{" "}
            <Button
              className="me-4"
              onClick={() => {
                console.log("Agree");
              }}
              variant="success"
            >
              Agree
            </Button>{" "}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AgreementComponent;

export { AgreementComponent };

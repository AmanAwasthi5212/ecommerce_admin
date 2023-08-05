import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EasyShop</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEhANDxAQEA0QEBAPEA0ODhIQDRAWFREWFhUVFRUaKCggGB0mGxYVIjEhJSkrLi4wFx8zOTMtNygtLysBCgoKDg0OGhAQGi0lHyYtKysrLS8rMi0vLystLi01LS0tKy0rLSstLS4rLS0tLS0tLS0tKy0tKy0tLS0tLS0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIFBwYIAwT/xABJEAABAwEBCwgGBwYFBQAAAAABAAIDEQQFBgcSEyExMjRysUFRUmFxc5GyIjOBkrPBFHSDk6HD0SRCU1RighUjY2SiFjWjtPH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQMEBQIG/8QAOhEAAQMCAgcFBgUEAwEAAAAAAQACEQMEBTESIUFRYXHBEzSBobEiMpHR4fAUM4KywkJScqIVNfEk/9oADAMBAAIRAxEAPwD8sMTcVvot1R+6OZTyTei33QiHVbujgpr3AAheGJMqGSb0W+6EZJvRb7oU0JwESVDJN6LfdCMk3ot90KaEQESVDJN6LfdCMk3ot90KaEQESVDJN6LfdCMk3ot90KaEQESVDJN6LfdCMk3ot90KaEQESVDJN6LfdCMk3ot90KaEQESVDJN6LfdCMk3ot90KaSICJKjkm9FvuhLJN6LfdCkhKAiSoZNvRb7oRk29FvuhSTSgJyV88k3ot90Iybei33QpVQiAnJUMm3ot90IyTei33QpqKUBOSo5NvRb4BLJt6LfAKaSWpPWo5NvRb7oSybei33QpoSgJ61T4jeYeASUkKlCuyruHVbujgpqEOq3dHBTWk3JZpzQhCE0kIQhCEIQhCEIQhCEIQkhCaSEkkJpJJpJpJoUaoTRVCEJIQkkkkuk0JISKaEIUUk1JRSQhCqkJIVFXlew6rd0cFNQh1W7o4Ka025LMOaEIQmkhJNdFeJAyS04sjGvbk3nFe0ObXNnoVHWqdmwviYEqSjS7Wo1gMSYXOVRVbT/hVm/l4fuY/wBEf4VZv5eH7mP9Flf81T/sPxC1v+Ff/f8A6/VYspLRb+rDDHZHujijY7HYMZkbWuznnAWeWaB0r2RMFXvcGtHWTRaFrdNr0+0AgTt4LOurU29Ts5kwDq4khfNKq1W5N6dlgaMaNs0v70kjaiv9LTmAVr/hdm/l4fuWfoqDsZpA6mkq+zBqhEucAd0T9+HxWK1SWxWu9+xyijoI+2NojeOwtosyvkuM6xTGKpdG4Y8bzmJbWlD1jR4HlVi2xCncO0QCDx28lXusPqW40iZG8fL5SqtRJXR3n3vC2Oc+QkQR0BxczpCc9AeQU09oWiQ3EsjBits8NOuJrj4mpK5ucRp0XaEEngurbDqldunIA2cVi9U1tZuTZdH0aCncs/RchfhenE2N1pszcR0YxnxA+gRyuaOQjTTRRR0cVpVHBpBEqSthVSmwuBBjhBXA1Squ9wcthmjmilijkfG5rg6SNjnYrhSlSOQg+K/ThBuVE2zCWONkZjkbjGNjWVa4FuenWWqQ37RX7AtMzE88uO5cCwJoduHaomOWe2N6zlKqa1a9O48IskBkhje9zMcufGxzjjkuGcjmIHsXd1dNt2hxEyYUdram4cWgxAlZRVJdZhEybJ44Yo2RhkeM7JsaypceWmmgA8VySko1O1ph8RKjrUuyqFkzCEIQpFGhCihJNVaEkKkrsK+h1W7o4KahDqt3RwU1qNyWWc0IQhNJC6fB7tf2T/kuYXTYPNr+yf8AJVr3u7+RVqy7wzmtEuk8time00LYpHNPMQ0kFZZ/1Vb/AOZf7sf6LUrr+otHcy/DKxNZeEUmPY4uaDrGYlaeL1HsczRcRnkSN25WVtu7a52ZOaVz4yQcUsaBUaNAX7bxmB1thryCRw7QxyoF0N4O2RdknwitK4a1lB4aAPZdlq2LNtnOfcUy8k+0MzO1alNJitc7TitLqdgqsnkvvt7iXZfFrnDGMZit6hUVWrW31cm4/wApWFt0DsKycJpMeHlzQcswDv3rVxaq9hYGuIzyJG7ctfvRui+1WZkstDJjOa5wFA7FOY05M1Fz+FBgpZXctZW+whh+StMHOxt72TiFW4UNSzb0vBqjotDMQ0W5S70KmrEvw+XHXot9QrLB2wCxtI0ukkJ9hxeAChf3dmayxxiB2K+VzqyUBIDQMwrmz1C+mDzYo9+TzFVOFPRZd6bgxJrQ/ECHCRpO6oe4sw8Fpg6LfOF+e82+a1S2llmnkyrZA8DGa0Fpa0uqCAOiR7V3tsjDo5GHQ5jmnsLSFjd790BZbRFaC0vEeNVgIBOMwt0/3LsX4RIyCPo784I9YOZS31k91UOos1QMoGuTxGyFHYXrG0iKz9cnOTqgdZVFg7tmTtbWE5pmujPNUAOHCntWi3w2XLWa0RAVLo3Fo/qaMZv4gLG7BaTDJHMNMUjXduKQafgtzY8OAcM7SAQeQgpYqNCs2q37IPyIRhLg+i6k7Z6H6grB4mF5axus4ho7XGg4rdoIgxrYxqsa1g7AKBZXca5eLdRtmA9GGdz+wMBc3gPFaVdq15CCablZG4t3qUaPEhGKP7R1NjduseOoeieFs7NtRzthg/pEn1WR3y2rLWq0S6QZHBp/pb6LfwaFWJJLZADQGjZq+CxnO0iXHaZ+KkooSQUk0kkJJwqtCSFTlXF0EOq3dHBTUIdVu6OCktVuSyjmmkhJCSa6bB5tf2T/AJLl11GDva/sn/JVrzu7+RVux7wzmtDutngnAzkwy0A06hWNfQ5f4b/dP6LcU156zvvwzSNGZ+9y9DeWIuSCTEcJWEyRubrNc2ujGaW18Vf3g7ZF2SfCKt8KWtZeybjGqe8DbYuyT4RW0a3bWbqkRLXdQsVtDsbxtOZhzeh6rUbb6uTcf5SsLboHYt0tTS5j2jSWOAHWQVlAvMuj/AH3sX6rPwqqxjX6bgMsyBv3q/itKo8s0Gk+9kCd25drg52Md7JxCrcKWpZt6Xg1Xd5Vz5bNZhFM3Fkx3OxcYOzGlM4VJhS1LNvS8GqOk4OxCQZEn0KlqtIw+Dnot9QrPB2f2JnU+QHxr81C/u4s1rjjdCA58ReTHWhcHAVxevMMy4+9K+c2Iuje0vs8jg5wbrtdSmM0cuYCo6vHTrm3RgtDcpBI2RvLTWaeZw0g9q4um1be4NYDVMg7New7vuE7V1K4txRJ1gQRt1bR6+qxGWNzHFj2lr2mjmOBa4HrB0KC2q61xbPaxizRgkCjZB6Mjex3y0LOb5b0JbIDMw5WzjS6lHx7w5uzwC0rbEKdY6J1Hy8D0WdcYfUpDSGsefiOoXNLYrzLZlrHA795rck7+w4o/AA+1Y6tBwW22otFmP7pZK0bwxXeVviucTp6VCdxnousMfo1tHePqruy3MxbpT2mnomzRkHkxicQ/hH+K/FhLteJZRCNM0jQR/S3OfxDV16zDCfbMe0RwjRDHn6nSGp/4hvis20mtcMJ/pA/1Grzhad5FK3eBtJ/2OvylcchJJegXnk0kJITAQhFUJJqqQhCpq2ugh1W7o4KShFqt3RwUlqjJZJzUlFNRqhCkumwd7X9k/5Ll10+Dra/sn/JVrzu7+RVuy7wzmtFusaQTkZiIZSCMxHoFY0LdL/Fk+8d+q2W7HqLR3EvwysQCzsIALHcwtHFyQ5kHf0X1lme6mM4upoxnF1OyqvrwNtj7JPhFc6uhwf7dF2S/CK0Ln8l/wDifQrOtPz2cx6rV3OABJzACpJ0BV3+P2L+Zg+9av2W31cndv8AKVhDdA7Fg2Nm24Di4kRGXit6+vHW5aAJmfKFu9ktUUzceJ7ZGVIx2ODm1GkVC4zClqWbel8rVY4N9jHey8Qq3CnqWbel4NTtqYp3oYNhI8ilc1DUsi87QD5hZ4vtY7XLA8SwvdG8aHMND2HnHUV8C4c6WMvREata86Dr1Fabehfg60ubZp2gTkEskZmY/FFSC3kNATmzZuRdZbYw+ORhztdG5pHUWkLJbwtvs3bN8B616bVduu4LzWI0WUqwDBGoHz+i9Lh1V9WkS8zBjyHzWAtOYLo7wbZkrbE3klDoj7RjD8QFzbNA9iuL0ttsne/qt+5AdTeDuKwbUltRhG8eq2pYffFa8tabRNyOkcBug0b+DQtwWBW31km+7iVkYUBpPPAffktfFT7DRxP35r5ISRVbKxoRVCFFCaaSEkpQqxCSFTVyF0EWq3dHBfRfKI+i3dHBTWqMlknNFUIUUIAUl0+Dra/spPkuWXUYOdrHdSfJVbz8h/Iq1Zd4ZzWjXY9RaO5l8hWHBw5x4re3NBzHODmIOgr4/Q4v4Uf3bVhWV8LdpaWzPH6LevbI3BaQ6InZO7iFheMF0eD/AG2Lsk+EV1uECzxtsby1jGnHjztYAdK5HB9tsXZL8IrV/EivaveBGpwznYsoW5oXTGEzkco2/RanbfVyd2/ylYO3QOxbzbfVyd2/ylYK3QOxVcI91/h1VnF/eZyd0Wr4N9jb3snEKtwp6lm3peDVZYNtjb3svEKswq6lm3peDVAz/sDzPoVO/wD68f4t9QrHB5Gx1iYS1pIkkBJaCdKrMKFnpHZ5GtAY172vc1tAC4Nxa+BX5sHF3GRY9jlcGh7seJzjRuNQBza8laAj2rRXNBFCAQdIIqCo67jb3ZqEbSeYP35KSi1txaBgOwDkR/4siwfRl1uhc0VDBK55GhoMRaCfa4D2rW7QaMef6XcERQsZqNa2unFaBXwXP36XbZZbO9uMMvMx0cbAfS9IULyOQAV9tAoq9U3dYaIjIR4z1UlCkLSidIztnwHPcsgboHYFcXo7bZe9/VVCt70dtsve/qvRVjLHcj6FefoD22c2+oW1rArb6yTfdxK35YBbfWSb7uJWRhWb/DqtfFfdb49F8lFCS2FjppISSTQhCEk1WJIQqitq/i1W7o4KahFqt3RwUlqA6llHNCEkIKEL7WS1yQuykT3RvoRjMNDQ6Qvirm865jbVamMeKxMDpHt5HBtKA9RJHsqo6r2sYXOyAUlJrnPDW5k6l+mx2u7M4xoX2l7OR4zMPY40BX6TFd//AHPvg/NaVJIyNpc4tZGwVLiQ1jQPwAX47FduyzuycU7HyZyGA+kaaaA6fYsL8e4yW0mwOEx4jUt78ABAdWdP+UTyGaye610Lca2e1STcjjHLUaDmNDxX5LmyTNkZ9HLmzk4jCw0eS7NQdq1i+65bLTZ5QQMpG10kb6ekC0VpXmIFP/izC9c/tll76PzBaNtcNrUXENAiZGzLqs65tnUqzQXEzEHbn0VzJDd6hxvpGLQ1rI2lKZ+VcmFvVq1H7jvKVgTdA7AuLC57YOOiBEZCN67v7fsi32iZnMzlC6K4sV1TEDY8tkC51Mm8Bla0dpPOvyXedbgWR250laF7GyOBoDmJFOxaJg52GPfk85XMYVNog7n8xy4pXBddOp6I1E6416l3Ut9G1FTSdrA1Tq18FxnUulsVmu2GjJC1tZyAvc0AdTXHMrXBjcpjjJbHgOLHCOKoriuxaud20LQO0rvbfdCGztyk0jI2k0Be6lTzDnK4ur7Rf2TWh3PXr4Bd2llpM7Rzy2dxjVxKzV8F8BFD9Kp1SAHxBqubulZZ4nn6QyRkrs9ZQ7Gf14x1u1bFZb4rFK4Rx2iNz3GjW41C48wrpPUvtdq5kdrhfBIAQ4HFdTOx1PRcOsFQsxBzHQ+mAOAIKmfh7ajZZUJOySCPosLJV7Zr27qMc2WOzyNe04zXtLQQecZ1QytIxgdINCOsaV6Ch1W7o4K3e3TqGjABmc+EfNVLK2bX0pJERl4/JZbkb4P919439Vz90LjWuAGSeCRja1Mjm1ZUnlcKge1a5LfNYWOdG+0RtexxY5pqMUg0IKs43skaHNLXxvbUEEOY9pHgQQqQv6lPWaYAPAifFXTYsqahUJPMGPvmvP6Su78rltslrljYKRODZI29FruTsDg4DqoqVazHh7Q4bVkvYWOLTsSQhRTSCaSEkJqtQkhVFbXQRard0cFJQi1W7o4Ka1Bksk5oUUJJIQuwwY7TL3B87Fx67DBhtMvcHztVW97u/krdj3hn3sK6vCCf2GbeiH/las4vWcRbLLT+MweJoVo+EBpNhnoCaGImnIBI2pWRVVTDRNu4byR8WhW8SOjctduDT8HFbzbvVy92/wApWMXq7ZZe/Z5gq7HPOfEqyvY2yy9/H5gpKFr+HpvGlMjdGQPEritdfiKtM6MQd85kcAtoteo/cd5SsBboHYFv1r1H7jvKVgDNA7Aq2E5P/T1VjFc2fq6LXcHOwx78nnK5jCptEHc/mOXTYONhj35fOVzGFXaIO5/Mco7fvzubuqkr9xbyZ0V/gu2ST6xJ5GKpwtH0rIOTFnNPbGrbBdsb/rMnkYqjC3r2Tdn/AC02d/8Aj+0p1e4Dk31C4ixGkjCNIewg/wBwW/LALJrs32+YLf0Yrmzx6JYVk7mOqwC6vrJu9f5nLfIdVu6OCwO6vrJu8k8zlvkOq3dHBGJ+7T8f4ow336nh6uWHXzbZa/rEvxCtRweEm59mrzzDwnkWWXzn9stf1iX4hWp4O/8At9m7Z/8A2JFJf92bzHoVxY95f+r9wXG4Vtrj+rN88i4xdlhV2uP6s3zyLjFZtfyW8lWu/wA933sQkhJTqBNJCEkKsQhCqSrcK/i1W7o4JqEWq3dHBTWqMllHNCEKKRKFJXN59122O0CR9ck5ro3kCpaHEEOpy0IHsqqRJcVGh7Sx2R1KSm8scHtzC3uGZkrQ9jmvjeMzmkOY4fNcrd68SCaslnIs8unFpWB39v7vszdSz65F2rRY3Y8EhaCaujOdj95vz09a0a9m/KG1lsMjcjaTobWrHmn7p5D1HxKw321e1OnSMj7zC22XNC5GhVEHj0Kza61ybRZHZOeMsJ1XaY37rtB7NK+16+2WXv4/MFrt37EyezzRPAIMbyK6WuDSWuHMQVkF6p/bLJ38fmCvW90a9FxI1gH0VKta9hWYAZBI9Qtue0EFp0EEH2rmv+g7nfwnffSfquitDiGucNIa4j2BZK2/y6FB/mt+6jWVaUqzweydGU6yPRal1UoMI7Vs5xqB3b1qdyrmxWWMQQgtjBcQC4uNSanOVnmFXaIO5/McuxvMujLarKyeYh0hfI0kNDRRriBmC43CttEHc/mOUtmHNuyHaz7UqK7c11rLcvZj4hdBgt2N/wBZk8jFUYW9eybs/GNW+C3ZH/WZPIxU+FrXse7P+WpGd/8Aj+0rmr3Ecm+oXDWT1jN9vmC9Arz9ZNdm+3zBegUYp/R49EsLydzHVefrresm7yTzOW/Q6rd0cFgN1vWTd5J5nLfodVu6OCMS92n4/wAUsO9+p4fyWFXzOH0y15xtEvL/AKhWq4P4nMsFmDgQTlXgHTR0z3NPtBB9qvjZ4yalja6a4oqvnbrbFAwyzSNjYNLnmg7BznqCrV7vtmNphuUbZ2HhxVmjaGk91QuznZGZBzngsxwqn9sj+rM88i4tWt891vptpltABDCQ2MHSGtFBXtzn2qqWxRaW02tOcLJrvD6jnDKUIQkpFHCE0k0JFViEIVVW1exard0cE1GLVbujgpLTB1LKOaEJJJJppEpLrcG0MclpkZIxjxkHENe0OFQ9uehUdWp2bC+JhS0afaPDJzXJVVrettlk76PzLRL9rlx/QpjDBHlG5N3+XG0PoJGl1KCuiqzy9CN0ltswaC7Fka91M+KG5yTzaFXp3Ir0XPAiJHkrD7c0KzGkzMHzWzW/1Uvdv8pWK3qbZZO+j8wW03QNIpT/AKb/AClYrentlk76PzBUMN/LqeHoVfxD82lz6hbba9R+67ylefWaB2BegbXqSbjvKV59ZoHYusKyf4dVximbP1dFr+DbYY9+X4hXMYV9og7n8xy6fBtsMe/L5yuXwr7RB3H5jlxQ767m5SVu5N5N6LoMFmySfWJPIxVGFvXse7PxjVtgrP7HJ1Wh/wANirMLUDz9FkDSWNEzXPAzNJxCK81aHwQw/wD3eJ/aU6vcRyb6hcFZPWM32+YL0EvP9zInSTRxxgue57QGtznWC9Ap4pmwc0sLydzHVefLr+sm7yTzOW/ward1vBefrqGskx5C95/5legYNVu63gliXu0/Holh3vVPD+Sw++S0yC12sB7wBPKAA5wA/wAwqoe4uNXEuPO4knxKsb5tstf1iX4hVYtJnujkFn1NbjzKEIQukkIQhCSE0k0JFViEIVVW1dxard0cE1GLVbujgmtFZhTQkiqE4QrG9y6psdojtFCWtJa9o0ua4UNOvl7QFXKK5c0OBaciumuLSHDMLern3QhtDRJDI2Rp6JzjqI0g9RX6gAM9APwXnuvLy840oLzznxKyThQnU/y+q1m4qY1s8/otVv3vlhhhks7HtfaJWmPFYa5NrhRznEaDStBpzrPb1dssnfx+YKqRVXKFs2lTLBtzKpVrl1SoHkZZBegrXqP3HeUrz2zQOwKeMec+JUVza2vYAiZmNm6eJXd1c9uQYiJ2znHALX8Guwx95N5yuWwsbRZ+5/McuJDiOU+wlIuJ0mvauWWmjWNXSznVG/jK6ddaVEUoyjXO7hHVdhg9vhjsj5IJ3YkMpa5rzqscBT0uYEUz8mKFqsUjXjGa5r2nQWkOafaF55SBpozdmZcXFi2q/SBjfqnqu7e9dSboxIHh816KDANAA9i56+m+WGxRPo9rrSWkRRNILqkZnOA0NGnPzLF8c858SkoWYa0EFzpG6I6lTPxJxHstg75nooyaD7c69FQ6rd0cF52TxzznxKs3Vt28a4ifOOPBV7a47CdUzHDKeB3qyvn2u1/WJviFVqSFYAgAKBxkk70IQhNcoQhCEITSTQkVWIQhVVbVzFqt7BwUqqMWq3dHBNaAWcmooSQhNJCSSaEIQkmmkkkkmmkkhIlNCSEJEpoQhJJdQhCEIQhCEIQhCEIQhCEIQhCEIQhNJNCRVYhCFVVtXEWq3sHBNQi1W9g4KSvbFnoSQhCEIQkhdISQkkmmkkhKU0IQhJCEk0JJykhNCESkhNCESkhNCESkhNCESkhNCESkhNCESkmhCEEqsQhCqq2pR6B2DgpFCF2FGkhCEJhJCEJFCEkISTSQhCSYQhCEJoQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEL8CEIVdTL//2Q==" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
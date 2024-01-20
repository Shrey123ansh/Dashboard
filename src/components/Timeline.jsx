import React from "react";
import { useEffect, useState, useCallback } from "react";
import "../assets/styles/timeline.css";
const Timeline = () => {
  let items;
  const [y, setY] = useState(window.scrollY);

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if (!items[i].classList.contains("in-view")) {
          items[i].classList.add("in-view");
        }
      } else if (items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
      }
    }
  }

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [y]
  );


  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    items = document.querySelectorAll(".timeline li");
    callbackFunc();
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <div className="section1 timeline">
        <div className="timeline-heading">
          <h1 style={{color:"white"}}>Previous Events</h1>
        </div>
        <div className="timeline-heading-rect"></div>
        <ul>
          <li>
            {/* <div>
              <time>Event 1</time>
              <div className="discovery">
                <h1>Coming Soon</h1>
                <p>Laws of motion</p>
              </div>
            </div> */}
           <div className="discovery">
            <a href="#Edition 5.0">
            <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUTExMWFRUXGBUXGBcYFxgVGhkbHxcXGBgXGBoYHSggGholHRUaITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS8vLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABGEAACAQIEAgcEBwUGBQUBAAABAgMAEQQSITEFQQYTIlFhcZEUMlKBQoKSobHB0QcjU2LwFSQzNHKic7Kz4fEWQ6PC0mP/xAAbAQACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EAEERAAEDAQUDBgwGAAYDAAAAAAEAAhEDBBIhMUFRYXEigZGhsfAGExQVFjJSU5LB0eEFI0JygtIzYqKy4vEkQ8L/2gAMAwEAAhEDEQA/AM3EvOpmGnK3trf8eVRTKo0LKKPaV+NfWuSb5MgFfSmGk1t0uG/EfVPwM6tmIPjrRNJmJJpb4zOoAPme+mah50T0m4T98EU2Cb05RSgwnc2YxhFFFFQmRRRRQhFFFc17qFK5I4UFibAamqDFcZkY2TseWrf15UvpLjDfqRyAZ/Pcf14itD0C4Aqossou76qDyHLTvO9aqbGtZfcvLfiduq1a/k9B0AZkYSeOwZYROO5Y7EQYhe2we1ve7V/WpWA4y6kBz1innzH1ufzr2SfBKy2I5V5HxvhQjxMkSjs2zqByNr2HpTse2oIIXMPj7I4PpvP33jI86u1YEAjUGu1E6GIkrNC8wia2aMsDkvezKzD3eRuQRve1WvEOHyQvklUg7jmCOTAjQqbbistRhY6F66w21tpph2TtRvGcbRwnpwUWiiikW1FKZ70miplKWAkE6IoooqEyKKKbWPW9SISuJEQJTlQuJQfTHz/Jqm0WvTMeWOlU2qztr0jTdzbjofkdxVDRVj/Zi/zVytnlFNec802vYPiU3pBgMvaG2/1e75VTQxliAK22MKOp7QvuNt6zuHwwQtbn/tX4aRtfxbSOjvu0XSfYvH1Gvy9r6jjkeng6qgAAe6tdrhNqT1grJicV17zW4YBLorgcGu0QRmpBByRRRUrhfD2nkVFsL3LMdFVRqWY8lA1JqEOcGiTkExDC0jBVUs2wABJJ7gBqauG4AIxfEzpCf4Y/ey/NFNl+swpzG8XWEdTgyVXZ5/ckl+Kx3jTuXfvrPk99Sqmmo/H1R/q55kDhBO0g4K5bE4SP/Dgll/mlfIv2Ixmt9elLx6S4EMUcNv4cal/tvmf0Nc6N9G5sY1kFox78h2Hh4t4D52rQdKcVhcDhMRhcN28S0UkbyXBIuCpBbkf5V25607Kd7EmBtWG1WmnSPi2tNR8TdmQBtdPJA4CTzgryaHBSYmRMTIS64idgxJJIynZifi/BfGtzxrCutsuFSYEA5mOosQAqWBym2t9NqqOhrAQGNmQDNGyKSAxY/CDve428a9CgkFhfer3vIdwXmKFEPYTOJjZnjPXjz4Kq4c5hjcvnItcKzFrWNrKTrY1ksUhfESOzAsoDWAtZe7x00+YrZcRnGRwbgmwAt/WnjUDi+CURCdUBcAbaFh8J7/nzpQcztTVWEgNGQCwUihMTYaWe3yYbf7h6VseG8WXIIMQC8N7Lb34j8UZO3imxrNDAh8ZEGYKrMilm2Fm9468r61d8Z4TLhpCkg8VYaqw71PMf0aisTIcut+B3XMfScdZAyOWJG8YfPDM4xwtoGGzxuLxyD3XXvHceRB1B+RMCrjg/EkynD4i5gc3DDUxN/ET/AOy8x98Xi/C3w75WsQRdHGquh91lbmD91ULu03kG4/PQ6OG0bx+oaZjAqvD8qVSQlKoMaKxl6OUgm1MxPr50qRSaT1Zp2hsYlZ6jn3xdGA609RQvjvRSLUDKK5I1hXabeMk1LQJxVdUuDeSMUzainOqairrzdoWHxT9hXEuTuafpv3RSka4qp+OOi10YbyScc0oVHdbGpFJZb1DXQVNanfGGaTEtOUUVBMmVY1oaICK0Ew9lwaqOzLiu0x5iEGyjb6TAse8Koqn4dhjNKkY3d1UeZIH51Y9LsQHxUgX3IyI0HcqDIAPDsk/OgFVVOU9rNMzzRA6eV/FU1aTof0VfGPma6QqbFuZPwrfn47D7q50O6LtjHu11hQ9phu3PIPH8AfKr/pn0nWJfYsJlVVGVmXlyMakc/iPmN71Yxoi+7Lt+yx2u11HVPJrN6+p0YNp37BwSelfStIE9kwVlVbqzr6EIRz733vtrrWMwWGDaufEjn31K4FwVpjmbRPx8BUTpTwibDylkv1RF1IvYaag95B+6nDHv5bstPtuXMtVqo2Jps1nMvPrHM852nZ+kTqsr0lmKMrIAvVupQd2XtC/oK9YjPXRqRcEWa1yNbbG3LWvF+JSGSRVGoF/G5PvG/M17LgomWNCujBVB5g6c6tqiGtXHsh5TtmCRxBiEsnWZraBrOt/9WhtVVxPG5erhLgvozgbWHhyFTOMcUmUECNL2PaudPG1qw3RoiSZ3eQM7EhgxsxN9AO9bEjTa9QBIlPWqQYGqOkTBZV6vVVOpHf4elazgvH0ki9mxYLw/RYavCfiQ/D3r3bdxq+McNVImVSDfVW53Gtj3EHekcE4NIcMZgulzYcyANTbuuPxocJZhmE1iq3LQ1rjDXETpB0IOhGh5jIKlca4S2HcKxDKwvHINUdORB/EcvQmVwniqFPZ8SC0JJKsNXhY/STw+JOfnung/FVCHDYgEwsb3GrRPt1ifmvMXqJxfhbYd8jEFSAUcaq6H3XB7j91ZMsR3798cvYQXflVc8wRhMajY4ajtaV3jHCXw7C5DIwvHIO0jryIPz15j0JgVecE4uoU4fEAvA5vp70bfxI/hPeOetQ+N8KbDyWJDKwBjkHuuh2I/TkfkTJGqmnVcHeLqZ6HIOA13Eat5xgcK+iiilWhFFFF6EEqLj58osN2/2rWh4FjutjsfeXQ/rWTkidiSUbWpPDHeKQMEa30vLvrf4trWAAiePV0LhGvUqVyS03TgMDhsOWuu47gtraioX9ox+PpRVN8bVo8S/wBlUMThgCNmpVVfDsRY5Ts341aVVUZcdC02K1C00g7XI8fvnzooooqtbEUUUUIWi6Dxf3gynaCOSc/VUhfvK+lQej/CXxmIEY5nM7fCt+0T66eJFWHCozFw/EzHeVkw6enWP/tAHyrXdFIE4fw9sVIO26h7bEjaNB5k3+t4Vaxl4gHLEnh3hcq12p1EPezFxLWNG059RceJEapHS7jKYCBcHhdHK2JB1RTe5v8AxG1N+W/dXn3B8AZpAo2GrHu/70xjcU0ztI5zM7Ek+J/LkByAFbLorgxHDmI1PbPlbb0/GnZ+dUxy+Sz2g+a7Gbpmo44u2uOZ2wMY0y2lZ7jnTY4DF+zLAjxokZtmKNci5ANiNiOVRuNftSE0TRJh1QOLFnbOQOdlCgE91zVB+1CDLxAMd5IonPgbvHp4WQVlmF79+9dFoDmgheOeCxxBzUpcWMy5Baxvfnve3cB4V7hgJg6Ke9b18/Zc2+g/rWvVf2e8cEi9S2joBY/Eu1/Oqq9PkyFpsdWHwdVedIosqM38rfhXl3Q7Bq0nWStkVV57s1rAW8tTSemHFnxGJlOdjGGKIt+yFU2Bt3mxN99andEZFDBZFzISVvsym247x3g73qBTLGIq1W1KkjvvV7xT/D6wtoxI19420Gm5bS/lvVl0PxMhl6p7LqvVjUCRSHL+F1Cj1NSpMPF1bQS6OnbSS30bE3v5Cxv3VSYfF9RiUZiCoICPoQrEAD/Te4Hke6kYYQ8T37Vb9KuE9Wc6jRjqP5u/y/Om+EYtZk9knICkkwu3/tOeRPKNtmHfZu81suLYdZoj3Otx8xcH5V5nKmVivMMfu0NUWhlx0jIr0/4NaTarOaVQ8pkQdY/SeIxB2iAZkz3E4dkZkdSCCVKncEbitH0fk9qhbAue1q+GY8nAJMdz9FxfyNz3VF4kfaMOmIGskZWGXvYZW6qQ+JClCeZQfFVXwvFmKaOUaFXRv94NvutWeYO75d++C6rmurUoyeMtzhlG4zhtaYwkqOy8joe48vCuVe9OMP1eOnHxMXH1wHP3k1RUEQYV1KoKjGvbkQD0ifmipWFw4YEk25Dz76YijLEAV3G4Yqwtex/q9Mxv6iMEtR8YDNJZbG1JY2qTiMJlUH1qBK9/lR4sh0FQ+sAy8EnrWrtJtRV11uxY779pT/Vr8A+ytKoorOuiABkku1hQjXFKoowiEsG9M4bEVyu1YdHsH12KhjOzSKD5Zrn7gajgmc4NBc7IYngFf8Uwn+QwAOtkeQfzysL5vFVt8jV1+1fF5I4MOtgpzMR4KMqDy1b0FU0WL6zjQc6jrgo8lJRfwFSv2tg+0xd3Vr/zvf8AKr//AFuI2gcwXDa0m12dr9Guef3Oknry5lh4UuwH8y/fpXpsUeWGw7lX7wPwrzJZ8nbtfKM1u+1zb7qhQ/tBxRlDsVMYv+5UZF27JLkFjberrI0kOjcsfhE+KlEHLE9bfknf2uke3QgbiBL/ADkkI/A1lWj5ijjfF3xWKeeS17BbC9lAFgACb2/MmlwvyNbqTbrQCvM1X33l21M9VUvAztDIskZsV/MWII7qSorjWHn/AF3U8JQYUcpe/gT/AF/XfV7wadYQrrF1r8izdhGtvkGpI8TVKynlbXXn3D5U5hpih5jv5Uj2yFLTBlbvHTtIkagG+RFZiLF/pFM3IXax8R4VF4xwuSWMBsisdSL2zagqFsCBa2x8O6pfAzAYi8jdZYWtna48SNbU5xXFRwxtna6/QG7HkPwveswmVpMXZVvwPpjhkw+Hw80jCfSIjI7EkNlBLKMutxzqn6RRZZ2Hfr62J++oHRngb40+2KVDxYmIMp0DIvVtmv8AGNd99Nra2nSv/MHyX8Ki1jkDiup4POPlThtae1q70Y7byw/xopVA/mUdZGfMNGvqaqYkuwUblgB82t+dWvQ//PYe38RPx1+69PdD8H1uPiHJX6w+SHP6XAHzrnhswNv2Xqn1RSc950aHc/K/qE9+0JgcfKB//MfMItZupvHMZ12IlkGzyOR5Fzb8qhUEySQns1M06LGHRoHQAiiuGkxx2owVhcQQIUnDxlzblzpEilSQeVQ+I4uWJM0RGnvgi+nIjXlSsPM7AGX3iNbXFvhXWrLnIvDvzLP5SPHmkZyBywxwGPHTdsxUiiuUVUtcoooooUIooooQitP+zlAcahP0VlI88pH51mKv+gmL6rHQn4iYz9cFR95FOwgOBO1Zbc0us1QDO67sVVgMYY5km5rIr+ZDA/lXoP7UsIJIIMSuoGl/5XXMp+7/AHVgON4XqMRJCdMruB5BtD89D869D6E41Mbgnwcp7SqVHfkJ7DDXdCQPkvfT0RINPb2hYfxJ4Y6nbWYhhx/a8ffDivMV32vqBbv8Ke6XdEcNDg2xEOdTmjOXNdbOwXS4v9Ic+VOcUwD4eV43FmU2Pj3EeFrEedL6RcQzcMZL69ZEvyDZl/5fuq6xuh906/JY/CKjfoMrNxAPU7I8JA6V5swsLDn4a1NwmqjWoM5sKXgpbV015BWgh8T8tKUIgNhamDMTyPralxKTyPzJNShcw9iCD3m3qaWU8ajyu1yPwpsyN3/gKhC0nRRU6xs7BYlRi+nK3P0+61ROI9J+uAXqVKi9hIA7L5EWsKj9H5rvJGyZ0MU7suYqSI4nl7JGxOS2x32NQZFhIvDnUfC9m9GH6VXdF6U5dyYXp/7JZP7tiP8AjA//ABqPyqB0ilzTse7s+lgfvqD+zfiQjXEhjpkRwPEErb/corkjlmJ5ljfzOprHbXZDnXo/BugS99XYLo4kgnoAHSFa9G7J12IO0MTkH+Zx1SD1kJ+qatOjH7jB4zFHS69RGed3sSR5Ag/I1XcYHUQphB75KyT+DlMqRbfRVrn+Zz3VZ9JP3HD8Hh9AXvO/1h2L/VYj6tY24Y7B19+xdysfGQBk9wH8Gy7rgxucFkL12iikXSSQ+tqUK5lHdXakxokaHfqTXWnwritc7L6UqZedPRYc5M/fVmF2QFmh9+6Th37Vyu0mu1UtkrlFFFChFFFFCEV1WI1BsRqCOR5EVyihC2HSPCDH4dcdGB1kYC4lRvcLpJbut91vhNZzgvEnwsySx7g6jkR9IHwI/I8qe6O8bfCSh11U9l1OzLzU+PceXqKuOkXAI3j9swfagOrp9KE8wVHL8PLUWklwvDMd5+veOaxrKDvE1ByHYNJyx/Qf/k6jDMBafpDwyPieGXEwf4qi1tLmwu0TfzC+nn3G48k4thneNkF7gg22JIJ0A7960fRbpDJg5cw1jaweO+47x3Ecj8q1/Sjo7HjY/bcHYuRdlH07bmw2kGxHPz3sBvHxjfWGJG3f9ViLBZQbJXP5L5DXezP6XHsJ+sfPcqk7C/jTkUHZZrjssiEc7ssjA+X7s+orR8W4Vn7SDK30kt73l4+FZvqipbzA9Bp+NdSnVbUbebz7u/WvK22xVbJV8XUHA6EbvmMxwIJlwMbCnpJiLa7+FNQnSuqLkn+rVYsiQr7k8zQ4pBa7Hnt+FKNCFJ4DjVieck2LYXFxqe5mha3zNio8WFV8cQsLG1RMUN6u+DcJLhXe4XQ5fj/7VW97WAlyvs9mq2h4p0hJ6hvJ0H/QkwFP6P4QreQ8xYeIvck/MfdW24bAMNGMVIAZD/l425kbTMD9AcviYDkL1zhXDEjjGJxK2j2ii2MrDlr7sY5t8hVZxTiDzyGRzrsFGgUDZFHJQNhXHq1C99883Dv14r3VkszaVEWdhlo9Y7TqBxyJ0GHrSRzDRNPMouS7uoudSSxtc+Nzer79ouIDYzq192FI41+Qufva3yrn7PcEHxYkbRIVaUnkLAW+83+Rqi4pizNNJKd5HZvLtEgfIafKkybxPYtE3rVGjG9bz9G9ai0UUUq1oooooQi9Pe0ta19NthUUR63pymyyKRsuHKCK7XKKWFYiuA10UzFobUwbIKre+6RvUmNb0lhauXookXYjHapAMyiipEuFsoYHSwqPUEEZqWuDskVbdHePSYOXMuqHR4zsw7j493d5XFVNFAJBkKKlNtRpY8SDmCthx7gUU8RxmC1TeWL6UZ3NgPo+HIajTar6MdJJMFJde1GbZ476HxHcw7/kfBjo7xyTByiRDddnQ7MO7z7jy9QbzpPwKOWL23Bi8TayxjeM7tYDYa6jlvsdLM+U3AjvI+ezhlziLn/j2jlMdg0n/a4+17Ltf3K26Q9HosfH7XgyC51ZNsx3Nxyk12Oh+8+YY/hyuSHBVtibakjQhgdL6W11q54HxubCSZ4msOanVWHcV/PcVt3GC4uuh9nxVudrt+GffwYU7XXjeYYd28Ppksz6ZszDStDfGUdDElmy9rA0cMQOgeMzcHkX3LOPPKfQ1Clw0g06tvE5TXovGuiuJwxOdCyfGlyvzNtPrAVSgnxq1ttqNwcMehUHwfslcX6DzG4hw68ekrIRYWS5AVt/hNTYeESHlb/UR+HvVo7nxqx4TwKfFG0UTMPi2UebHT5b0eXPODQO1QPB2zUxfq1DA4NHOccOhZrC8EjU3P7xvH3R9Xn863PD+DpAgxWM2OscGzynkWB92Pa5/wC15PVYTh4uxXFYoDRR2oYz3sfpkHl4bLvWZ4jj5J5GklYsx3v9wA5AdwrO95Jl5k9Q77OnYujZqLLlyztuU9Tk53Ccf5uxj1faDnF+JyYiQu58FUaKijZEH0VF6g1IweCklYJGjMTyClj92w8TWywHBIeHKMRjSGl0MeHBDG/Im+mh+Q8TYUjWl2PSe/crTWr07MAwCT+lgzPAaDaTgBjnmmdBw/hxU6YjFbjmsdtj8jbzc91Yip3GuKSYqZpZDqdgNgBsB4D9TzqDUuMnDJTZaTqbSX+s4y7jsG5oAA4TqiigC+lBFt6RaZRRRRQhFFFFCEUUUUIRXCRfxpuViNLZaRFvVgZhJWd1aXBoGqkUVWSY2Tr40y5YyT2rhs+h57Dy3q9xcKrsde7f/wAUOpOaJ3Soo2unVc4NnAxiCMYB1xjHOMdJEFM4yJ7AnVbDSn5GTKvxW5fnTUmJJFtgAB/5pkUOcNFYynJk98+5CYjxQJIOhzFf9VP1Sze83+pvxqfw7ObC115E7/V76vq2cNbeaeb6Ln2W3ue/xbxOeI+ewb+lS6uOjXSB8JJcdpDo6HZh+RHI1TsLEg7jlRWUEgyF0alNlVhY8SDmFteOdGUxCe1cP7aHV4R76HmAo1+r6XFrYvUeFj6EfnU7hHFpsM+eJyp5jdSO4jYj+hatV/b+Bxg/vmHMUvOSIb+Jt+BzedOQ127s+3DJY2vtFmwINRuhEXxuIwvcRjtEqt4V06xUIClxKo0tIM2ngRY+pNWDdMsJIP33D4ie9co+8qDXDwjhTarjmA2sQCR4e5XWw3BoTrLLMe4beoVR99P+YMCRzkH6rI4WN7rzaL5/ytc09ILR0ps9LMMthDw2K/Ivlf0Frn1qRKOK44ZQhiiP0QOoW3z7TD1FNt02gg0weCjT+d7FvnlOb/dVFxHpXi5r55mA7kOQeVha/wA71BcNs8BHfoTMsry68ykGnQ1HF7uZskA/yG9Xn/oaOLXFY2GM/CCCfkHI/A10ng8B2lxJHp/9Lj1rEEnvNFJeGg6ce/QtnktV3+JWcf2wwdWP+pa/F9OnVTHhIYsMv8qgn1sFHofOspiMSzsXdizcySWJ8yaboqHOLs1dQstGhPi2gTnqTxJknnKKKBTWExKyyGNDcgXYjbyv9LegNJyCsfVYwgOIE5b9cObEqRG1iD3EU7iJs5Glh9/rSVQqwzaaj8aVinUnsj58vSpxDSOpQYvA9aTisPk1vYd9MkVzFOWRyTfst/y1VYbElfEfD/8Anuq1lHxgJZ0LNWtYoOa2prqPp9Ogq2opqCcNt9mnaoIIMFa2Pa8XmmQiiiioTpzF4pXO6j5i9RVKgjtL6isbi11HlTGSuqbDieV1fdeLPhIcPyRh/mP9VuYyo+mnqKc61fiT1FYnBYF5nyRIXezNlG9lUsx+SqT8qj2pTYAf1dSZvhM5ogUR8R/qts0q394eop1MSvNh6isZjMC8LZZEKMVVrHfKyhlPkQQaYy0xsLSPW6lW3wkqtMimPi+y3WB4ejMS8iEZjuwt6X1rQ4dolGjpfvzLf8a8nhgLsqKLsxCqO8k2A18TTsPD5HZlWNmZSAwAuR2xGNv52C+ZFP5JJku6lX5+IENpAD93abslbXHupkNmXnzHeaZXErzYeorGi6FlI7QJUg8iDYim21N6XyJpET1Jx4R1A68KY+L/AIrcviEAuXHreq/EcQzaAgL561lctFqGWJrTMyq7T4Q16wuht0bjnzx2RvWx4W6hD2gO13juFS+tX4k9RWDy0ZaV1hDiTe6lbQ8I30abaYpDAR63/FbzrV+JPUV0SqfpL6isFlpcbW5Co83j2upWnwpqe6HxH+q3JkX4l9RR1q/EnqKwrm5vSctR5vHtdSPSmp7ofEf6redavxJ6ijrV+JPUVg8tGWjzePa6lPpTU90PiP8AVbqSRbHtI3zBpjhsUcTmRCFzL7uYW8wb6bbVjMlGWnbYrogOPR91Q/whvvD3UQSMuVlz3ZyXoEuKDal19RUePFLzYeq1h8lGWo8hGrupOfCapIimB/I/1W6mlXK3aX3W5j4ag4PCByLso+sAfvOlZPLRlqynZSwENdnuVFb8e8c8OfSGGl4x/tXpmHwsMaG8iE2NgGFr289TVYJxf3lPzFYuGDNel4VdTS+QtOZVg8I6oEBg6eqLsQtr1q/GPUV2slloo83s2lP6TV/dt61HxfKuQJGUkLuyuAvVqEzBzmAYM1xkAW52N6faEu8aAqC7BQWIVQSQAWY6KuupOwqJKmVitwbEi4IYGxtcEaEdxG9bTmvMlIIrtTcBgUkDEy5SoJIyE9kc9PwqQOC3CESEhwpX92+XtHTM30aqdWY3AnqPHYttL8OtNVgexsg7HM7L07oiZwVSBT80aBIyrlnOfrEKFQhDWSzX7eZddhban8Xw8IrMJA4VzG3ZIs3z3qHEmZgtwLkC5IUC5tck6Ad5O1O1wcJCz1qFSg65UEHiD1gkd9qmcB/zWH/48H/VWr3o9DiWxOM9kXM6iRms2VsqzqzBdO0WAy2/mqn4VAY8bChKkriYlJVgykiZRdWGjDTQjetF0VxLRPxWSNirpBMysNwROpB9RQUgVV0sxDv1DSx5C8KyRkSZx1bPIRdcoynw/lN730z1en4+T2rGYXEOsSgcM9pcNGZUSxkLMkQIzsC1wpNvOwpzEdHcPNNj4LLCivhJjIEUGNDBI8mUH3QSt8t7a0TCIXlt6kpw9zC04A6tXWMm4vmYFgLb7A616IvBkgxaqViAw2AjMhaDriXMxUuIwQGkIIFyTYE1X9KMGkOH4jHGoVE4hEFUbKOqc2HcNaJRdWDooopkqKKKKEIooooQiiik0IVtL0cxSxRTGB+rmIERWzlyQWWyKS4zBWIuBcKbVExHDpY41ldGRGeRFLArdky5xY9xax8QRuDW9xz4vCcNw0zoZc/UuXIURxRLFJFhYOzYs9pWYnl2RrqayHSHpC+LiVGjVcr4iS6liSZXLkEE7C9halBJTEAJHEujmKw8STTQMkb2CsSp1K5lDKCWQldQGAvVYkTFWYKxVbZmAJC3NlzEaLc6C+5r1rjmHT2ieWYxnDY3G8IMTF1KzRorCYixvkAaxJsNaquLCeOPiqPDh4pmgw7CONIheJcRIDI0eqrIIyDdQCBkYWOtReUli8+weEeUsI1LFUeRgLaIgzO2vIAXpm9e0cSwKxYtBhoYVkOG4oIVRIyJIxFH7KWUdmQElwC182t71Cx3DsIuH4oUgjbLLiFORYSIrYWNo+07holE5fKI73YFbaUX0XF5KG8aewm5q56bAJNHCioqR4fDZQqqpJeCKR2dgLuxZibsTVNhNz5U4SaqVRRRTqVFxLgqDSMNA0jpGguzsqKNrsxCqL+ZFLhlaJ1dCMyMrqbA2ZSCpIIIOo2OlJXFOJOtDWkD9YGAAs+bMGAAsNdbWtSKFf4LhAzSJh8Qs8mV43QRspJ27GZgGQkWz6W0uuop/BcMxTtHE0USAWXOWR2UA5c2VXzFQ/YJAsGupsQRUbBdLHhcyRYfDxszZnsJDmbf6UhKqLt2VsO1zsLMYfpKylHMMLSRgqkjCS4UyNJlAD5d3YZrXsSL1U6mHYkd8uxa6dsrU23WPIGzTEzrvTuLwOLlWxhVFuXbWJAG7AtKWeyPeRBlezdsaVQSIVJBFiCQQeRGhBrTN03nLZiASblrS4lbscpLDLN2Pd91bL2mFtrZ98UxlMoCqxcyAKoCq2bPZVOgUHZdrC1M1t0QAqq9Z9Z1+o4k7SnuAf5rDf8AHg/6q1peinBmxeIx0SzPESkvukZXJmCrHJfdCxF7VQcKxDSY2GRzdnxMTMbBbkzKSbAADU7CrvgGMETcUJcIxgnEd2Ckv1wIC97aX07qkqsaJ7EcIxWHwmExfXTLijIuHijBsY4yJOrQc7kg6bWcaVUMOIO7L/eGfE54WGpabq+y6N35Nj3VcwdITLh4pcTNnlHFMPK97ZurSFQWCKB2Ra2g38auMZj0jxGGSPE4Zmz8SdrvmiZJ3zJE8i/4Zdbi/wBE2v3GJUwFncFhuIySYrECWdcVhkjEgOYSlGJBF/hVVza6WAI76rposaUDydcIsY6Au+YJM1xkZu/a4PMDSr/ic8IHFIY8UHLR4QxF5c9xEweSFJT/AIhUdkcyBzsTVnxHGYcYCNY5omBk4ewJmMkzZf8AF6xXa6BDcAAAACiVELK8Z6Izx4uTCwRTTFFDX6uxYbGQAE2QsDl1uazrCxsRYjQg6EHuNekcFxkJ4jxCRpYj/eEaLrJjHEyDEM0j6MFdkWzKDcXNwKwvSBw2KxLKQVM85BGoIMrEEEbgipCghQaKFUnQV2VLG1MoXKKKKEJzBwGSRI1UuzsqKqkAszGygEggEkjerJOEM04wwiPXNlyqcVhwrZgGTJIR1bZgwtZje+lRuBY4YfEwTkFhFLFIVG5CuGIF+dhWmwnHo3x0cqPi9JEYJEkas7rAsbTlM+XO5Vsyi3ZYnNyqCSpCoMbwRoY1mkw7qjsVVuuia5BYbKhIByNYkWYKSCRUvF9GJ4s+bDSdhWd8uIgksqusb6xqbsrMoKjtC+oAq56RYp8XhooYcFiUZX1XqjkVU6/KqFd+zOLiwy5Odc4r02mSfFlFOHYhhABGqlC+Iimd5Qb5mdEsTqD2eVLimwWW4lgBh5XhmhkSRCA69bGSCQGsSsZB0I50nh+DWaRYooXZ2NlXrY11sSTdowAAASSSAADT3STiK4jEyTLms/V+9v2YkQ31PNTSOj+PEGJimJYBGN8oVjYqykZWsGFmsRcXF9QdQ2iVSMN0feSd8MmGczJ76ddCtu0qjtMgU3Z0AsTmLra9xTeJ4O0aQyPh5As1uqIljYtcKQMqoWUkOpAYAkMCK1XC+lsZ4g81sQ6yv+7gVVOUifBypkXrLZpPZcrW926+9ameI4uSSHAKMLibwHDySExHKQscEKGMgnMG6m4Jy+9bW16WTKmBCpJ+jM0ee+Fl/dqHbJPDJYGQxadWpzESAqQLlSDcC1VmOwsmHmeKRSjoxVkJViD3Fl0PmK3fHul8sIcpDJhJ2V1jvGEA/vkkrEhydSklm09491jWM6ScQXEYqaZAQsjAgNa/uga2J7qlpKCBomPaR40VFrlPKWV2nocRlSRMkbZ8vbYEumVs14yCAt9jcG47q77DL/Ck+w36UexS/wAKT7DfpSX2bQrvJq/sO+E/RIw2FeQlY0ZyFZiFUsQqi7NYcgNb01epKYSYaiOQaEaK40IsRpyINq57FL/Ck+w36VF9u0I8mr+w74T9EjFYV4mySIyNYHKylTYgMpsdbEEH50qacMkaiNFKBgWUHNJdi13uSCRewsBoKe9hma5ZJCbbkMToLAXPIAWpr2KX+FJ9hv0ovt2hHk1b2HfCfonuA/5rD/8AHg/6q1KhwSSz4kOWGXrXGUA3IktY35doVEwsM8bpIsUmZGVxdGIurBhfwuKHinLM/VyKWLE5VkG5uR5X5eAovt2hT5NWj/Dd8J+issV0XkjkUM6FGxEcAYE5jnCsHCkDTK4576eNdxXRdgz9W6sioZASdSqxQytYoCh0nUA5rNrVa64o7ic2YOLmU2YAAOL/AEgAADuABSmOLJYn2glgwYkyEsGChgx5ghFBvuFXuFF9u0KfJq3u3fC76KZP0dMcqrI46tvaTddWtArO1wwADEKLakdrwpa9E5m7SZcpErLnzI1kYCzrlIVyCDlv363FqryMVmDfv8yksrXlupO7KdwTzI3ro9rtb+8WswteXZjmceTHUjmdTRfbtCPJa3u3fC76J3ivBGgjSQujgsUOXNoQXtbMoupCHXe422Jq6mzriX98Tvrftda2uuuvPU6+Jpn2KX+FJ9hv0ovt2hQbNW9274XfRNxxXFwdaQ7E70+MJNa3VP8AZb9KbmgZfeUrfa4I/GpvtOAKV1Cq0S5pA3gjtCRRRRTKpFTeDYpYpld75csqnKASM8Tx3AJF7Z72uNqhUUIWmxvS0SD/AASG/e7yXADwzRWHYva8+bUkdnQAu5NJxbELJKWS+UJCgJAUnJDHHcgE2uUva53qJT/sM1r9U9j/ACN8uVLLW5mFY1lR/qgngCUxRUj+z5v4Mn2G/Sm/ZX17Dab9k6aXN9NNNagPaciFJoVRmwjmKk8Cxiw4iKVgSqOC1rE22NgSLnXa9WmL6Ro8UiCFrvDDFfOqgNHH1QksqBiSpO7X1KklTaqN8M43Rx2BJqrDsG1pNvcOYWbY3HfUqLgOLZSy4TEsoLAlYJSAR7wJC2BHMcqkgKvFPcc4os4WylT1uKlYG1h1roQoP0rBNTYe94VVxgE2NOtg5BcGOQEMqG6MLOwJRDpozAEhdzY2pp1IJBBBBIIIsQRoQQdiO6pUFSPZR40VHue+uU0oW+sfGix8axMmPlP02HzP60j22X43+0f1rleb3e0F7L0ope7d0hbmx8aLHxrDe2y/G/2j+tHtsvxv9o/rR5vd7QU+lFL3bukLc2PjRY+NYb22X43+0f1p6OeQi/WOPrH9aPNzvaCPSil7t3SFs7HxosfGsOcZJ/Ef7R/Wue2y/G/2j+tHm93tBHpRS927pC3Nj40WPjWG9tl+N/tH9aPbZfjf7R/Wjze72gj0ope7d0hbmx8aLHxrDe2y/G/2j+tHtsvxv9o/rR5vd7QR6UUvdu6QtzY+NFj41hvbZfjf7R/WnYpZT9NwP9R/Wjzc72gj0ope7d0hbSx8az3S3/2vJvwFROtf43+0361CxMxY+8zW7yT6Xq6jYjSeHEjXshYfxL8dZa7M6iGEExmRoQfkmqKKK3LzSKKKKEIq8wfE7JCpdiyS5pPePY0t5jbSqOpeH4pNH7krLy0PLT/8r6CqqtIVBB74QtNltT7O4uZmcOsHaNnar+TiEZ6wdcylg4UhJroSRyZt/K21QeJcTJzhUZlKJGzsGUki9j4G/f3VGbpFijvO/wB3jvprvzrjcfxJBBncg2J23BBB20OlVssrGmc+86AHQa6LXW/Fq9VpbgJ2A5QREEkRBIynermfjkckEsbBzIMJDBAwQ6jJh+thbS4UPEzqdu0/eKZxuJEx4iY0kcTyRtHaNzcLNnObTs9kjeq3/wBRYrT9++nl9+mvzps8bxBYN1zZgGUHT3TbMNtjYelXwubeWpwvSSJOqEgkzBFklUof8zAIFgXUXsww2p5e0t3Vh2vc5r5ud9787+N6sP7exOv799fED8tPlUGaUuxZjdmJJJ5k7mpAhQTKTRRRUqEUUUUKEUUUUIRXeXzrlFCEUUUUIRRRRQhFFFFCELVhRRTNUhNYj3TUSiiocgooooqEIooooQigUUUIRRXKKFC7XKKKELtFFFCEUUUUKV//2Q==" />
            </a>
            </div>
          </li>
          <li>
            {/* <div>
              <time>Event 2</time>
              <div className="discovery">
                <h1>Coming Soon</h1>
              </div>
            </div> */}
            <div className="discovery">
              <a href="#Edition 4.0">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxnCuAqS_Z_6_-5aDqRJ4cueNbjOfeoCS1w&usqp=CAU" />
            </a>
            </div>
          </li>
          <li>
            {/* <div>
              <time>Event 2</time>
              <div className="discovery">
                <h1>Coming Soon</h1>
              </div>
            </div> */}
            <div className="discovery">
              <a href="#Edition 3.0">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxnCuAqS_Z_6_-5aDqRJ4cueNbjOfeoCS1w&usqp=CAU" />
            </a>
            </div>
          </li>
          <li>
            {/* <div>
              <time>Event 3</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Law of electrostatic attraction</p>
              </div>
              <div className="scientist">
                <h1>Scientist</h1>
                <span>Coulomb</span>
              </div>
            </div> */}
            <div className="discovery">
              <a href="#Edition 2.0">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DWkXs_tV_FRF6pFiJhJ5Yq0gmVodYCB6tA&usqp=CAU" />
            </a>
            </div>
          </li>
          <li>
            {/* <div>
              <time>Event 2</time>
              <div className="discovery">
                <h1>Coming Soon</h1>
              </div>
            </div> */}
            <div className="discovery">
              <a href="#Edition 1.0">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxnCuAqS_Z_6_-5aDqRJ4cueNbjOfeoCS1w&usqp=CAU" />
            </a>
            </div>
          </li>
          <li>
            {/* <div>
              <time>Event 3</time>
              <div className="discovery">
                <h1>Discovery</h1>
                <p>Law of electrostatic attraction</p>
              </div>
              <div className="scientist">
                <h1>Scientist</h1>
                <span>Coulomb</span>
              </div>
            </div> */}
            <div className="discovery">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DWkXs_tV_FRF6pFiJhJ5Yq0gmVodYCB6tA&usqp=CAU" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Timeline;

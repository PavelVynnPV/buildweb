import React from "react";
import Title from "../HeaderForBackNInfoLinks/Title";
import styles from "./Building.module.css";
import building from "../utils/img/building1.png";
import Aside from "./Aside";

function Building({ link, setLink }) {
  const href = window.location.href;
  setLink(href);

  return (
    <>
      <Title link={link} />
      <main>
        <div className={styles.text_block}>
          <p>
            <span className={styles.bold_text}>
              Що потрібно для будівництва власного будинку?{" "}
            </span>
            Якщо Ви вирішили робити все своїми руками, то знадобляться певні
            знання та вміння, щоб:
          </p>
          <ul>
            <li>проектувати та виконувати креслення;</li>
            <li>зводити фундаменти та стіни;</li>
            <li>проводити комунікації;</li>
            <li>штукатурити;</li>
            <li>наносити декоративне покриття;</li>
            <li>та ще багато інших навичок.</li>
          </ul>
          <p>
            Для людини, яка не є професійним будівельником та не має команди
            досвідчених помічників, будівельний процес займе багато часу.
            Доведеться покладатися лише на себе. Перш ніж розпочати самостійний
            захід, задайте собі питання - що буде, якщо станеться щось
            неординарне, незаплановане? Як швидко, без додаткових фінансових
            витрат впоратися з негараздами, що виникли? Хто понесе
            відповідальність за неякісно виконану роботу?
            <br />
            <br />
            Запитань багато, відповідь лише одна –{" "}
            <span className={styles.underline}>
              Ви, ніхто інший не несе відповідальності.
            </span>{" "}
            Тому найкращий варіант - це звернутися до досвідченого та надійного
            підрядника, для якого будівництво будинків, насамперед, є
            професійною діяльністю. Всі роботи, починаючи з розробки проекту та
            закінчуючи здаванням об'єкта в експлуатацію, повністю лягають на
            плечі будівельної компанії, яка, маючи колосальний досвід, може
            гарантувати якісне виконання кожного етапу будівництва будинку, яких
            досить чимало.
            <br />
            <br /> Все, що потрібно від замовника – зустрітися з нашими
            спеціалістами для консультації, надання необхідного пакета
            документації (дозволів, паперів, що підтверджують право власності),
            підписання договору.
          </p>
          <img src={building} alt="Будівництво фото" />
          <p>
            Штат компанії - тільки найкращі фахівці, кожен свого напряму,
            професійно виконують роботи на виділеній ділянці.
            <br />
            <br />
          </p>
          <span className={styles.bold_text}>
            Переваги будівництва житла «під ключ» очевидні:{" "}
          </span>
          <br />
          <br />
          <p>
            • Ми чітко дотримуємося встановленого плану, у разі виникнення
            форс-мажорних обставин, які зустрічаються рідко, інформуємо клієнта.
            • За необхідності заміни матеріалів обговорюємо це з Вами. Будьте
            певні, що їх якість, зовнішні характеристики будуть ідентичні
            обраним спочатку. • Наша компанія співпрацює з багатьма виробниками.
            Це дає можливість отримувати хороші ціни, гарантує безперебійне
            постачання матеріалів. • Найголовніше – клієнти можуть займатися
            своїми справами, лише зрідка (якщо є бажання) відвідувати
            будмайданчик. Якість виконуваних нами робіт гарантовано!
            <br />
            <br />У компанії{" "}
            <span className={styles.yellow_text}>«BUDVEST»</span> можна замовити
            будівництво приватних будинків зі стінами наступних матеріалів:
          </p>
          <ol>
            <li>
              {" "}
              Дерево. Ми здійснюємо будівництво дерев'яних будинків із зрубу,
              клеєного бруса, фахверкові конструкції, а також за каркасною
              технологією. Для перекриття використовуються дерев'яні балки
              цільного перерізу, клеєні балки, балки двотаврового перерізу або
              ферми.
            </li>
            <br />
            <br />
            <li>
              {" "}
              Цегла глиняна. Цей матеріал відрізняється довговічністю, міцністю
              та стійкістю до вогню, тому будівництво заміських будинків рідко
              обходиться без цього матеріалу. Екологічність цегли полягає у
              використанні глини як основи для виробництва.
            </li>
            <br />
            <br />
            <li>
              Комірчастий бетон. Будівництво будинку на ділянці з використанням
              газобетону або піноблоків відбудеться приблизно в 4 рази швидше,
              ніж із цегли - через розміри самих блоків і застосування
              спеціальних клеючих розчинів, якими зв'язують блоки між собою.
              Характеристики пористих блоків: низька теплопровідність,
              довговічність, відмінна звукоізоляція, природний повітрообмін із
              навколишнім середовищем. Будівництво одноповерхових будинків з
              використанням газоблоку дозволяє отримувати міцні, теплі будівлі,
              з добрим мікрокліматом.
            </li>
            <br />
            <br />
            <li>
              Керамічні блоки. Матеріал має високу порожнечу та поризованість -
              до 70%. Це надає керамоблоку високих теплоізоляційних
              характеристик, паропроникності. Якщо планується будівництво
              двоповерхового будинку, то керамічні блоки помітно прискорять
              роботу по зведенню стін та міжкімнатних перегородок, оскільки
              розмір блоку більший, ніж стандартної цегли.
            </li>
          </ol>
          <p>
            <span className={styles.yellow_text}>
              Основна діяльність нашої компанії{" "}
            </span>{" "}
            – будівництво будинків під ключ. Це означає, що ми беремо на себе
            відповідальність за всіма видами робіт, що стосуються проектування,
            планування, постачання матеріалів, будівництва та оздоблення.
          </p>
        </div>
        <Aside link={link}/>
      </main>
    </>
  );
}
export default Building;
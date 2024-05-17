import styles from "./Feedback.module.css"

export const Feedback = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>ОБРАТНАЯ СВЯЗЬ</h2>

                    <div className={styles.inputBox}>
                        <input type="text" placeholder="ФИО" className="inputSize" />
                        <input type="text" placeholder="Телефон" className="inputSize" />
                        <input type="text" placeholder="E-mail" className="inputSize" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Коментарий" className="textareaSize"></textarea>
                    </div>

                    <label>
                        <input type="checkbox" name="" id="" />
                        Отправляя форму, я даю согласие на обработку персональных данных,
                        подтверждаю согласие с политикой конфиденциальности и условиями догов-оферты на
                        оказание комлексных услуг, а также на получение информационных рассылок от проекта
                        и партнеров проекта.
                    </label>


                    <div className={styles.btn}>
                        <button>ОТПРАВИТЬ</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export interface IPaymentCreation {
    m_uuid: string;
    m_account_uuid: string;
    m_tx_id: string,
    m_tx_currency: string,
    m_tx_amount: number,
    m_tx_item_name: string,
    m_tx_item_description: string,
    m_return_url: string,
    m_cancel_url: string,
    checksum: string

}

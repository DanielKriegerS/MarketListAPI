package com.danielks.MarketList.exceptions.market_list;

import com.danielks.MarketList.exceptions.generics.MarketListException;
import org.springframework.http.HttpStatusCode;

public class ListFinishedException extends MarketListException {

    public ListFinishedException(HttpStatusCode status, String cause) {
        super(status, cause);
    }
}

package com.danielks.MarketList.services;

import com.danielks.MarketList.entities.MarketItem;
import com.danielks.MarketList.entities.dtos.CompleteListDTO;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
public class MarketListImportService {

    public ByteArrayResource generateExcel(CompleteListDTO list) throws IOException {
        try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()){
            Sheet sheet = workbook.createSheet(list.description());

            Row header = sheet.createRow(0);
            header.createCell(0).setCellValue("Item");
            header.createCell(1).setCellValue("Quantity");
            header.createCell(2).setCellValue("Price");

            List<MarketItem> items = list.items();
            for (int i = 0; i < items.size(); i++) {
                MarketItem item = items.get(i);
                Row row = sheet.createRow(i+1);
                row.createCell(0).setCellValue(item.name());
                row.createCell(1).setCellValue(item.quantity());
                row.createCell(2).setCellValue(item.price());
            }

            for (int i = 0; i < 3; i++) {
                sheet.autoSizeColumn(i);
            }

            workbook.write(out);
            return new ByteArrayResource(out.toByteArray());
        }
    }
}

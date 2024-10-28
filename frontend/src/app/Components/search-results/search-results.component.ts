import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

interface SearchResult {
  id: number;
  title: string;
  description: string;
}

@Component({
  standalone: true,
  selector: 'app-search-results',
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {
  query: string = '';
  results: SearchResult[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  isLoading: boolean = false;
  perPage: number = 5;
  async searchMockData(
    query: string,
    page: number,
    perPage: number,
  ): Promise<{ results: SearchResult[]; totalPages: number }> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const allResults = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      title: `Result ${i + 1} for "${query}"`,
      description: `This is a mock description for search result ${i + 1}.`,
    }));

    const startIndex = (page - 1) * perPage;
    const paginatedResults = allResults.slice(startIndex, startIndex + perPage);

    return {
      results: paginatedResults,
      totalPages: Math.ceil(allResults.length / perPage),
    };
  }

  async handleSearch(): Promise<void> {
    this.isLoading = true;
    const { results, totalPages } = await this.searchMockData(
      this.query,
      this.currentPage,
      this.perPage,
    );
    this.results = results;
    this.totalPages = totalPages;
    this.isLoading = false;
  }

  handlePageChange(newPage: number): void {
    if (newPage > 0 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.handleSearch();
    }
  }
}
